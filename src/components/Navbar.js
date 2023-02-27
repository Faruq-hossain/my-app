
// props 
//props holo property 
//costom component banai tahole take onek 
//kicu dite pari ja se use korte pare nijer vitore
import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    //darkmode enable thakle dark kaj korbe tai dark k javascript e likhbo
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* // ` ata newar karon holo tamplate status use korte pari */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* props bracket and opore add korar asthe paass hobe data */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          
            
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Default Swi</label>
          </div>

        </div>
      </div>
  </nav>
  )
}


Navbar.propTypes = {title:PropTypes.string,about:PropTypes.string}
//amra to props pass kore value tiotle about add korci 
// jodi defaule rakhte cai thaole avabe.
Navbar.defaultProps = {title:'set title here',about: 'About text here'}
