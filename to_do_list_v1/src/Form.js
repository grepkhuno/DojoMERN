import React, { useState } from 'react'

const  Form = ({list, setList }) =>{
    const [input, setInput] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setList([...list,
        { content: input, complete: false }
        ])
        setInput("")
    }

    return (
        <div className='d-flex justify-content-center' >
            <h3 className=' '>
                Add Item:
            </h3>
            <form onSubmit={ handleSubmit }>
                <input className='m-2' type="text" value={input} onChange={e => setInput(e.target.value)} />
                <input type="Submit" value="Do" />
            </form>
        </div>
    )

}

export default Form