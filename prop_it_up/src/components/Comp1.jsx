import React, { useState } from 'react'



export const Comp1 = (props) => {
  const { name, lastName, hairColor } = props;
  const [ age, setAge ] = useState(props.age);
v

  return (
     <div><h2>{lastName}, {name}</h2> <p>Age: {age}</p> <p>Hair Color: {hairColor}</p>
     <button onClick={()=> setAge(age+1)}>Person's Bitrhday</button>
     </div>
      
  )
}
export default Comp1

