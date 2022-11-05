import React, { useState } from 'react'

function Records(props) {
  const { name, lastName, hairColor } = props;
  const [ age, setAge ] = useState(props.age);
  return (
  
      <div className='d-flex flex-column p-2 '><h2 className='col-auto mx-auto'> {lastName}, {name}</h2>
        <p className='col-auto mx-auto'>Age: {age}</p>
        <p className='col-auto mx-auto'>Hair Color: {hairColor}</p>
        <button  onClick={()=> setAge(age+1)} className='col-auto mx-auto btn btn-primary' type="button">Bithday Button for {lastName}, {name}</button>
      </div>

  )
}

export default Records