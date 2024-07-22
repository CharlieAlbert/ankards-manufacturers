'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../hooks/useAuth'

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token='))
      ?.split('=')[1]

    if (!token) {
      router.push('/auth/login')
    }
  }, [router])
  return (
    <div className=''>
      <section className='p-24'>
        <div className='container'>
          <h1 className='text-3xl font-bold'>Next TS Starter...</h1>
        </div>
      </section>
    </div>
  )
}

export default Page
