'use client'

import { Footer } from 'flowbite-react'
import '../style.css'

interface FooterItem {
  label: string
  href?: string
  onClick?: () => void
}
const footerItems: FooterItem[] = [
  { label: 'Members', href: '/members' },
  { label: 'Docs', href: '/docs' },
  { label: 'Accounts', href: '/accounts' }
]

export function FooterComponent() {
  const CurrentYear = () => new Date().getFullYear()
  return (
    <Footer className='custom-footer flex items-center justify-between text-sm text-gray-500'>
      <Footer.Copyright
        href='/'
        by=' Ankards Manufacturers™'
        year={CurrentYear()}
      />
      <Footer.LinkGroup className='flex items-center justify-between gap-4'>
        {footerItems.map((item, index) =>
          item.href ? (
            <Footer.Link key={index} href={item.href} className=''>
              {item.label}
            </Footer.Link>
          ) : null
        )}
      </Footer.LinkGroup>
    </Footer>
  )
}
