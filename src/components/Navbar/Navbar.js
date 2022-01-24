import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false)

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked)
  }

  return (
    <nav className="navbar">
      <span className="navbar_logo">travell</span>
      {menuClicked ? (
        <FiX size={25} className="navbar_menu" onClick={toggleMenuClick} />
      ) : (
        <FiMenu size={25} className="navbar_menu" onClick={toggleMenuClick} />
      )}
      <ul
        className={
          !menuClicked ? 'navbar_list' : 'navbar_list navbar_list--active'
        }
      >
        {navbarLinks.map((item, index) => (
          <li className="navbar_item" key={index}>
            <a className="navbar_link" href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
