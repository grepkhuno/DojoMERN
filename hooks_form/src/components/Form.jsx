import React, { useState } from 'react'


export const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const obj = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(obj)

  }


  return (

    <div >
      <form className='form  col-8 mx-auto border' onSubmit={submitHandler}>
        <div className="border col-8 mx-auto bg-light mt-4">
          <div className="input-group align-items-center justify-content-around">
            <label className="input-label m-2">First Name</label>
            <div className='col-5'>
              <input type="text" className="form-control " onChange={(e) => setFirstName(e.target.value)} />
            </div>
            {/* {
              firstName && firstName.length < 3 ? <p>Please enter a first name</p> : null
            } */}
          </div>
        </div>
        <div className="border col-8 mx-auto bg-light mt-4">
          <div className="input-group align-items-center justify-content-around">
            <label className="input-label m-2">Last Name </label>
            <div className='col-5'>
              <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} />
            </div>
            {/* {
          lastName && lastName.length < 3 ? <p>Please enter a last name</p> : null
        } */}
          </div>
        </div>
        <div className="border col-8 mx-auto bg-light mt-4">
          <div className="input-group align-items-center justify-content-around">
            <label className="input-label m-2">Email </label>
            <div className='col-5'>
              <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* {
          email && email.length < 3 ? <p>Please enter a last name</p> : null
        } */}
          </div>
        </div>
        <div className="border col-8 mx-auto bg-light mt-4">
          <div className="input-group align-items-center justify-content-around">
            <label className="input-label m-2">Password </label>
            <div className='col-5'>
              <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* {
          password && password.length < 3 ? <p>Please enter a last name</p> : null
        } */}
          </div>
        </div>
        <div className="border col-8 mx-auto bg-light mt-4">
          <div className="input-group align-items-center justify-content-around">
            <label className="input-label m-2">Confirm Password </label>
            <div className='col-5'>
              <input className="form-control" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {/* {
          confirmPassword && confirmPassword.length < 3 ? <p>Please enter a last name</p> : null
        } */}
          </div>
        </div>
        <button className='btn btn-primary mt-3' data-bs-toggle="collapse" data-bs-target="#infoTable"> Submit Info</button>

      </form>

      <div className='collapse hide col-6 mx-auto' id="infoTable">
        <div className='mx-auto mt-4 '>Input Information</div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Field</th>
              <th scope="col">Input</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{firstName}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{lastName}</td>
            </tr>
            <tr>
              <th scope="row">Email:</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th scope="row">Password:</th>
              <td>{confirmPassword ? <p>Password</p> : null}</td>
            </tr>
            <tr>
              <th scope="row">Confirm Password:</th>
              <td>{confirmPassword ? <p>Password</p> : null}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
