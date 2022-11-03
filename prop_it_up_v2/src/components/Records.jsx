import React from 'react'

function Records(props) {
  const { name, lastName, hairColor, age } = props;
  return (
    <>
      <div><h2 className='col-2 mx-auto'> {lastName}, {name}</h2>
        <p className='col-2 mx-auto'>Age: {age}</p>
        <p className='col-2 mx-auto'>Hair Color: {hairColor}</p>
      </div>

    </>
  )
}

export default Records