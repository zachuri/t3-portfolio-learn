import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className='min-h-full flex gap-8 items-center justify-center bg-black text-white p-20'>
      <Image src="/favicon.ico" width={18} height={18} alt="logo" />
      <Link href="/terms">Terms</Link>
      <Link href="/privacy">Privacy Policy</Link>

    </footer>
  )
}

export default Footer
