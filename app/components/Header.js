import React from 'react'
import './Header.css'
import { FaRegCompass, FaRegBell } from 'react-icons/fa'
import Link from 'next/link'


const Header = () => {
  return (
    <header>
      <Link className='mar-right-auto' href="/">
        <FaRegCompass className="icon"/>
      </Link>
      <Link href="/">
        <FaRegBell className="icon" size={"1.5rem"}/>
      </Link>
    </header>
  )
}

export default Header