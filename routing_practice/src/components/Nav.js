import React from 'react'
import { NavLink} from 'react-router-dom'

const Nav = ()=> {


  return (
    <div className="bg-info d-flex  justify-content-center p-2">
        <NavLink to="/home" className='p-2'>Home</NavLink>
        <NavLink to="/hello" className='p-2'>Hello</NavLink>


    </div>
  )
}

export default Nav