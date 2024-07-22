'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

export function useAuth() {
  const router = useRouter()

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token='))
    if (!token) {
      router.push('/auth/login')
    }
  }, [router])
}
