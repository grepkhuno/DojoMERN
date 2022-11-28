import React from 'react'
import { useParams } from 'react-router-dom'
const Num = () => {
    const {num}=useParams()
 


  return (
    <div>The number is: {num}</div>
  )
}

export default Num