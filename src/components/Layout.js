import React from 'react'
import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import '../styles/style.scss'
export default function Layout({ children }) {
  const navbarRef = useRef(null)
  const layoutRef = useRef(null)
  useEffect(() => {
    const navbarHeight = navbarRef.current.clientHeight
    // layoutRef.current.style.paddingBottom = `${navbarHeight}px`
    console.log(`Navbar height ${navbarHeight}`)
  })
  return (
    <main className='layout' ref={layoutRef}>
      {children}
      <Navbar ref={navbarRef} />
    </main>
  )
}
