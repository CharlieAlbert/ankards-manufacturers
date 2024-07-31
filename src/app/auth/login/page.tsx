'use client'

import React from 'react'
import { Form, Input, message } from 'antd'
import type { FormProps } from 'antd'
import { UserLogin } from '@/src/actions/auth/account'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface FieldType {
  username?: string
  password?: string
}

export default function LoginForm() {
  const router = useRouter()
  const onFinish = async (values: any) => {
    console.log(values)
    try {
      const formData = new FormData()
      Object.keys(values).forEach(key => {
        formData.append(key, values[key])
      })

      const response = await UserLogin(formData)

      if (response && response.token) {
        const maxAge = 1800 // 30 minutes
        const expires = new Date(Date.now() + maxAge * 1000).toUTCString()
        document.cookie = `token=${response.token}; path=/; max-age=${maxAge}; expires=${expires}; secure=${process.env.NODE_ENV === 'production'}; HttpOnly`
        console.log('Success: ', response.message)
        message.success('Login Successful')
        router.push('/new/batch')
      } else {
        throw new Error('Failed to login')
      }
    } catch (error) {
      console.error('Error: ', error)
      message.error('Failed to login')
    }
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <main className='m-2 flex h-[80vh] flex-col items-center justify-center'>
      <Form
        layout='vertical'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        className='flex w-[350px] flex-col px-4 py-2'
      >
        <Form.Item<FieldType>
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <button className='rounded-sm bg-blue-500 p-2 text-white'>Login</button>
      </Form>
      <Link href='/auth/create-account' className='text-sm'>
        Create account
      </Link>
    </main>
  )
}
