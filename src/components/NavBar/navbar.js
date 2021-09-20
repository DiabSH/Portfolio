import React from 'react'
import Logo from '../../NavbarLogo.png'
///react fontsome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const navbar = () => {
    return (
     <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className='container'>
<a class="navbar-brand" href="#"><img className='logo' src={Logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon style={{color:'#fff',borderColor:'#fff'}} icon={faBars} />
    </button>
  <div className="container-fluid">
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style={{marginLeft:'auto'}} className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about me</a>
        </li>
      <li className="nav-item">
          <a className="nav-link" href="#">how work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">protfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contacts</a>
        </li>
      </ul>
     
    </div>
  </div>
  </div>
</nav>
     </div>
    
    )
}

export default navbar
