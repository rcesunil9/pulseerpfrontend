import React from 'react';
// import Logo from "../../public/image/logo.png"

const Login = () => {
  return (
    <div>
        <div className='main'>
            {/* <img src={Logo} href='' alt=''/> */}
            <h4 className='text-center my-5'>PluseERP</h4>
        <form className='px-5 mx-auto form py-4'>
  <fieldset disabled>
    <legend className='my-5'>Log In to your account.</legend>
    <div className="my-4">
      {/* <label for="disabledTextInput" className="form-label mt-4">Disabled input</label> */}
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Email"/>
    </div>
    <div className="mb-4">
      {/* <label for="disabledSelect" className="form-label">Disabled select menu</label> */}
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Password"/>

      
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
        <label className="form-check-label" for="disabledFieldsetCheck">
          Keep me logged in
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary w-100">Submit</button>
    <p className='mt-5'>No Account yet? <a href=''>SignUp</a></p>
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