'use server'

import prisma from '@/src/lib/db'
import { hashPassword, verifyPassword } from './hashPassword'
import { NextRequest, NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

const secret = new TextEncoder().encode(process.env.TOKEN_SECRET)
const alg = 'HS256'

export async function createUser(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const hashedPassword = await hashPassword(password)

  const newUser = await prisma.user.create({
    data: {
      username,
      hashedPassword
    }
  })

  const token = await new SignJWT({
    id: newUser.id,
    username: newUser.username
  })
    .setProtectedHeader({ alg })
    .setExpirationTime('30m')
    .sign(secret)

  cookies().set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/'
  })
  return { token, newUser }
}

export async function UserLogin(formData: FormData) {
  const name = formData.get('username') as string
  const password = formData.get('password') as string

  const loginUser = await prisma.user.findUnique({
    where: {
      username: name
    }
  })

  if (loginUser && (await verifyPassword(password, loginUser.hashedPassword))) {
    const token = await new SignJWT({
      id: loginUser.id,
      username: loginUser.username
    })
      .setProtectedHeader({ alg })
      .setExpirationTime('30m')
      .sign(secret)

    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })

    return { token, message: 'Login successful' }
  } else {
    return { message: 'Login failed: Invalid username or password' }
  }
}
