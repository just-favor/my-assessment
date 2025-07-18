import React from 'react'

function Header() {
  return (
    <header>
        <h1>Portfolio</h1>
        <nav className="top-nav">
            <a href="#header">Home</a> |
            <a href="#about">About</a> |
            <a href="#skills">Skills</a>
        </nav>
            <a href=""><button>Let's Connect</button></a>
    </header>
  )
}

export default Header