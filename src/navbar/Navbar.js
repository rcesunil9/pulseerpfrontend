import React from 'react';
import Logo from "../asset/image/logo.png"

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src={Logo} alt="" width="130" height="45" class="d-inline-block align-text-top"/>
        {/* Bootstrap */}
      </a>
    </div>
  </nav>
  <div className='d-flex justify-content-end '>
    <div className='row'>
      <div className='col-lg-4 col-md-3 col-sm-3 col-3' >
      <button className='btn btn-primary'>Submit</button> 
      </div>
      <div className='col-lg-4 col-md-3 col-sm-3 col-3' >
      <button className='btn btn-primary'>Submit</button>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Navbar