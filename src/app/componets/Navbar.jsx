'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Navbar() {
  
  return (
    <nav>
      <NavItem
        path={"/"}
        title={"Home"}
      />
      <NavItem
        path={"/counter"}
        title={"Counter"}
      />
      <NavItem
        path={"/todolist"}
        title={"Todo List"}
      />
      {/* <Link className={`link ${pathname === '/' ? 'text-red-500' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/counter' ? 'text-red-500' : ''}`}
        href="/counter"
      > Counter
      </Link>
       <Link
        className={`link ${pathname === '/todolist' ? 'text-red-500' : ''}`}
        href="/todolist"
      >Todo List</Link> */}
    </nav>
  )
}

const NavItem = ({ path, title }) => {
 const pathname = usePathname()
 
  return (
  <Link
        className={`link ${pathname === `${path}` ? 'text-red-500' : ''}`}
        href={`${path}`}
    >{title}</Link>
  )
}