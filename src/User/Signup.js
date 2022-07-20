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
    <legend className='my-5'>Register now with PluseErp.</legend>
    <div className="my-4">
      {/* <label for="disabledTextInput" className="form-label mt-4">Disabled input</label> */}
      <InputGroup>
    <InputGroupText>
      <FaUserAlt/>
    </InputGroupText>
    
    <Input type="Email"
              name="Email"
              id="E-mail"
              placeholder="Email" />
  </InputGroup>
    </div>
    <div className="mb-4 d-flex justify-content-between">
      {/* <label for="disabledSelect" className="form-label">Disabled select menu</label> */} 
      <InputGroup>
    <InputGroupText>
      <FaLock/>
    </InputGroupText>
    <Input type="text" id="disabledTextInput" className="form-control" placeholder="Password" />
  </InputGroup>
  <InputGroup>
    <InputGroupText>
      <FaLock/>
    </InputGroupText>
    <Input type="text" id="disabledTextInput" className="form-control" placeholder="Confirm Password" />
  </InputGroup>

    </div>
    <div className="mb-3">
    <div class="dropdown">
  <button class="btn w-100 text-start dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    cd-commrece.de
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

<a class="dropdown-item" href="#">Amazone.de</a>
<a class="dropdown-item" href="#">Amazone.co.uk</a>
<a class="dropdown-item" href="#">Amazone.ca</a>

      </div>
  </div>

</div>
    </div>
    <button type="submit" className="btn btn-primary w-100">Submit</button>
    <p className='mt-3'>Already have an account? <a href='/'>LogIn</a></p>
  </fieldset>
  
</form>
<div  className='text-center my-5'>
<p><small>Contact us:<a src="" href=''> support@cd-commrece.de</a></small></p>

<p><small className='text-center'>All copyrights@cd-commerce<br/>

<a href=''>Privacy Policy</a> and <a href=''>Terms of Service</a> apply.</small></p>
</div>
        </div>
    </div>
  ) 
}

export default Login