import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className='bg-dark text-warning'>

            <h3> Product Manager </h3>
            <div className='col-2 mx-auto d-flex justify-content-between'>
                <NavLink to="/form">Form</NavLink>
                <NavLink to="/productlist">Product List</NavLink>
            </div>
        </div>
    )
}

export default NavBar