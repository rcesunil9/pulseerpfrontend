import React from 'react';
// import Logo from "../../public/image/logo.png"

const Login = () => {
  return (
    <div>
        <div className='main'>
            {/* <img src={Logo} href='' alt=''/> */}
            <h4 className='text-center my-5'>PluseErp</h4>
        <form className='px-5 mx-auto form py-4'>
  <fieldset disabled>
    <legend className='my-5'>Register now With PluseErp.</legend>
    <div className="my-4">
      {/* <label for="disabledTextInput" className="form-label mt-4">Disabled input</label> */}
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Email"/>
    </div>
    <div className="mb-4 d-flex justify-content-between">
      {/* <label for="disabledSelect" className="form-label">Disabled select menu</label> */}
      <input type="text" id="disabledTextInput" className="form-control mr-1" placeholder="Password"/>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Confirm Password"/>

      
    </div>
    <div className="mb-3">
    <div class="dropdown">
  <button class="btn w-100 text-start dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    cd-commrece.de
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Amazone.de</a>
    <a class="dropdown-item" href="#">Amazone.co.uk</a>
    <a class="dropdown-item" href="#">Amazone.ca</a>
  </div>
</div>
    </div>
    <button type="submit" className="btn btn-primary w-100">Submit</button>
    <p className='mt-3'>Already have an account? <a href=''>LogIn</a></p>
  </fieldset>
</form>
<div  className='text-center my-5'>
<p><small>Contact us:<a src="" href=''> support@PluseERP.com</a></small></p>
<p><small className='text-center'>This site is protected by reCAPTCHA and the Google<br/>
<a href=''>Privacy Policy</a> and <a href=''>Terms of Service</a> apply.</small></p>
</div>
        </div>
    </div>
  )
}

export default Login