import React from 'react';
// import Logo from "../../public/image/logo.png"
import { FaUserAlt, FaLock } from "react-icons/fa";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

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
      <InputGroup>
    <InputGroupText>
      <FaUserAlt/>
    </InputGroupText>
    <Input type="text" id="disabledTextInput" className="form-control" placeholder="E-mail" />
  </InputGroup>
    </div>
  
    <button type="submit" className="btn btn-primary w-100">Submit</button>
    <p className='mt-3'>Already have an account? <a href='/'>LogIn</a></p>
  </fieldset>
</form>
<div  className='text-center my-5'>
<p><small>Contact us:<a src="" href=''> support@cd-commerce.de</a></small></p>
<p><small className='text-center'>All copyrights@cd-commerce<br/>
<a href=''>Privacy Policy</a> and <a href=''>Terms of Service</a> apply.</small></p>
</div>
        </div>
    </div>
  )
}

export default Login