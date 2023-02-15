import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
                    <Link to = '/' className='text-light nav-link'>Welcome to react</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to = '/' className='text-light nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/login' className='text-light nav-link'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/signup' className='text-light nav-link'>Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/users' className='text-light nav-link'>All Users</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    </form>
            </nav>
        {/* <ul>
            <li>
                <Link to = '/login'>Login</Link>
            </li>
            <li>
                <Link to = '/signup'>Sign up</Link>
            </li>
            <li>
                <Link to = '/'>Home</Link>
            </li>
        </ul> */}
    </div>
  )
}

export default Header
