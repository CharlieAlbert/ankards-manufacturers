'use server'

import { randomBytes, pbkdf2 } from 'crypto'
import { errors } from 'jose'

const SALT_LENGTH = 16
const ITERATIONS = 100000
const KEY_LENGTH = 64
const DIGEST = 'sha512'

export async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const salt = randomBytes(SALT_LENGTH).toString('hex')
    pbkdf2(
      password,
      salt,
      ITERATIONS,
      KEY_LENGTH,
      DIGEST,
      (err, derivedKey) => {
        if (err) reject(err)
        const hash = derivedKey.toString('hex')
        resolve(`${salt}:${hash}`)
      }
    )
  })
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const [salt, originalHash] = hashedPassword.split(':')
    pbkdf2(
      password,
      salt,
      ITERATIONS,
      KEY_LENGTH,
      DIGEST,
      (err, derivedKey) => {
        if (err) reject(err)
        const hash = derivedKey.toString('hex')
        resolve(hash === originalHash)
      }
    )
  })
}
