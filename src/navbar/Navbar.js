import React from 'react';
import Logo from "../asset/image/logo.png"

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
    <div class="container-fluid mx-5">
      <a class="navbar-brand" href="#">
        <img src={Logo} alt="" width="130" height="45" class="d-inline-block align-text-top"/>
        {/* Bootstrap */}
      </a>
    </div>
  </nav>
  <div className='d-flex justify-content-end '>
             <button className='btn btn-primary'>Add Product</button>
    <button className='btn btn-primary'>Searchproduct</button>
    <button className='btn btn-primary'>Sort product</button>
    </div>

  </div>
  )
}

export default Navbar