import React from 'react'
import { useParams } from 'react-router-dom'
const  ParamsPass = () => {
    const {texto, wordColor, backGroung  }=useParams()

  return (
    <div>
    <div style={{color: wordColor, backgroundColor: backGroung }}>The text is: {texto}</div>
    </div>
  )
}

export default ParamsPass