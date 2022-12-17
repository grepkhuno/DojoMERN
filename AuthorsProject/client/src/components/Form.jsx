import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [author, setAuthor] = useState('')
    const [quote, setQuote] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/apicheckout/addAuthor', {
            author,
            quote
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })


    }

    return (
        <div >
            <h1>Add an Author</h1>
            <form onSubmit={submitHandler} >
                <div className="row border boder-warning col-6 mx-auto">
                    <div className="d-flex flex-column align-items-start col-10 border boder-warning p-2">
                        <label className='form-label'>Author Name:</label>
                        <input type="text" className='form-control' onChange={(e) => setAuthor(e.target.value)} />
                        <label className='form-label'>Quote: </label>
                        <textarea type="text" className='form-control' onChange={(e) => setQuote(e.target.value)} />
                    </div>
                    <div className="d-flex flex-column justify-content-center col-2 border boder-warning align-items-center  ">
                        <button className='btn btn-danger m-2'>Delete</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Form