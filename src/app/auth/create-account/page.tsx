'use client'

import React from 'react'
import { Form, Input, message } from 'antd'
import type { FormProps } from 'antd'
import { createUser } from '@/src/api/auth/account'
import { useRouter } from 'next/navigation'

interface FieldType {
  username?: string
  password?: string
  confirmPassword?: string
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
  console.log('Failed:', errorInfo)
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
      const response = await createUser(formData)

      if (response && response.token) {
        const maxAge = 1800 // 30 minutes
        const expires = new Date(Date.now() + maxAge * 1000).toUTCString()
        document.cookie = `token=${response.token}; path=/; max-age=${maxAge}; expires=${expires}; secure=${process.env.NODE_ENV === 'production'}; HttpOnly`
        console.log('Success:', 'User added successfully')
        message.success('Account created successfully!')
        router.push('/new/batch')
      } else {
        throw new Error('Failed to create session')
      }
    } catch (error) {
      console.error('Error: ', error)
      message.error('Failed to add user')
    }
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
          rules={[{ required: true, message: 'Please add username!' }]}
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

        <Form.Item<FieldType>
          label='Confirm password'
          name='confirmPassword'
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  new Error('The two passwords do not match!')
                )
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>

        <button className='rounded-sm bg-blue-500 p-2 capitalize text-white'>
          create account
        </button>
      </Form>
    </main>
  )
}
