import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='frm'>
        <div className='sform-top'>
        <h4>Welcome to</h4>
        <img src={require('../../components/navbar/logo.png')} alt="logo" />
        </div>
        <form className='s-form'>
  <label>
    Name: <br />
    <input type="text" name="name" />
  </label>
  <br />
  <label>
    UserName: <br />
    <input type="text" name="name" />
  </label>
  <br />
  <label>
    Email Addres: <br />
    <input type="text" name="name" />
  </label>
  <br />
  <label>
    Gender: <br />
    Male
    <input type="checkbox" name="Male" />
    Female
    <input type="checkbox" name="Female" />
  </label>
  <br />
  <label>
    Date Of Birth: <br />
    <input type="text" name="name" />
  </label>
  <br />
  <label>
    City: <br />
    <input type="text" name="name" />
  </label>
  <br />
  <input type="submit" value="signup" />
</form>

      
    </div>
  );
}

export default Form
