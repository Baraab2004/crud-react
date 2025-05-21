import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="my-container container">
          <Link className="navbar-brand" to={'/'}>Fake Api</Link>
          <div className="me-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'users'}>Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
