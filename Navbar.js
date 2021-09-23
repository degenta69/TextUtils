import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
<script src='https://cdn.jsdelivr.net/gh/gitbrent/bootstrap-switch-button@1.1.0/dist/bootstrap-switch-button.min.js'></script>

export default function Navbar (props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className='navbar-brand mb-0 h1' href='/'>
          {props.title}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                {props.aboutText}
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='/'>
                  Action
                </a>
                <a className='dropdown-item' href='/'>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='/'>
                  Something else here
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' href='/'>
                Disabled
              </a>
            </li>
          </ul>
          {/* <div className="nav-item" id="bg" >
            <input type="color"  onMouseLeave={props.coustmColor} onChange={props.handleChange} value={props.value} />
            <label>Choose backgroung color</label>
          </div> */}
          
          <div className={`nav-item form-check pl-0
            text-${props.mode === 'light' ? 'dark' : 'light'}`}
            >
            <input
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
              className='form-check-input'
              type='checkbox'
              data-toggle='switchbutton'
            />
            <label htmlFor="flexSwitchCheckDefault" className='form-check-label'>
              {props.mode==='dark'?'Disable':'Enabled'} DarkMode
            </label>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'give title',
  aboutText: 'about us section'
}
