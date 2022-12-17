import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className='bg-dark text-warning'>

                <h3> World Authors </h3>
                <div className='col-3 mx-auto d-flex justify-content-between'>
                    <NavLink to="/addAuthor">Add an Author</NavLink>
                    <NavLink to="/getAllAuthors">Author List</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Nav