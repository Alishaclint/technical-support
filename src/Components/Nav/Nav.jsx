import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='head'>
        <h3 className='logoname'>Company name</h3>
        <ul>
            <li><a href="home">Tickets</a></li>
            <li><a href="status">Status</a></li>
            <li><a href="contacts">contact</a></li>
        </ul>

    </nav>
  )
}

export default Nav