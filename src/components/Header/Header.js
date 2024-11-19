import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <h1 className='text-4xl md:text-[1.6rem] font-extrabold sm:font-bold text-secondary text-center mt-10 mb-10'>{props.name}</h1>
  )
}

export default Header
