'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Navbar() {
  const pathname = usePathname()
    console.log(pathname);
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'text-red-500' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/counter' ? 'text-red-500' : ''}`}
        href="/counter"
      >
        Counter
      </Link>
    </nav>
  )
}