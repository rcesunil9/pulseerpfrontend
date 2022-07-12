import React from 'react';
// import Logo from "../../public/image/logo.png"
import { FaUserAlt, FaLock } from "react-icons/fa";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import Logo from "../asset/image/logo.png"


const Login = () => {
  return (
    <div>
        <div className='main container'> 
        <div className='row'>
            <div className='col-4 col-lg-4 col-md-4 mx-auto mt-5 d-flex justify-content-around'>
            <img className='' src={Logo} href='' alt=''/>
            </div>
            </div>
            {/* <h4 className='text-center my-5'>PluseErp</h4> */}
        <form className='px-5 mx-auto form py-4'>
  <fieldset disabled>
    <legend className='my-5'>Log In to your account.</legend>
    <div className="my-4">
      {/* <label for="disabledTextInput" className="form-label mt-4">Disabled input</label> */}
      <InputGroup>
    <InputGroupText>
      <FaUserAlt/>
    </InputGroupText>
    
    <Input type="text" id="disabledTextInput" className="form-control" placeholder="username" />
  </InputGroup>
     
    </div>
    <div className="mb-4">
    <InputGroup>
    <InputGroupText>
      <FaLock/>
    </InputGroupText>
    <Input type="text" id="disabledTextInput" className="form-control" placeholder="Password" />
  </InputGroup>
      
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
        <label className="form-check-label d-flex justify-content-around" for="disabledFieldsetCheck">
          <p>Keep me logged in</p><a href='/forgot' className=''>Forgot passsword</a>
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary w-100">Submit</button>
    <p className='mt-5'>No Account yet? <a href='/signup'>SignUp</a></p>
  </fieldset>
</form>
<div  className='text-center my-5'>
<p><small>Contact us:<a src="" href=''> info@cdcommrece.de</a></small></p>
<p><small className='t ext-center'>All copyrights@cd-commerce<br/>
<a href=''>Privacy Policy</a> and <a href=''>Terms of Service</a> apply.</small></p>
</div>
        </div>
    </div>
  )
}

export default Login