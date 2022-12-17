import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddAuthor = () => {
    const [author, setAuthor] = useState('')
    const [quote, setQuote] = useState('')

    const navigate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addAuthor', {
            author,
            quote
        }).then((res) => {
            console.log(res)
            navigate('/getAllAuthors')

        }).catch((err) => {
            console.log(err)
        })
    }
    // const cancelSubmit = (e) => {
    //     e.preventDefault()
    //     const inputs = document.querySelectorAll('#authorName, #authorQuote');

    //     inputs.forEach(input => {
    //       input.value = '';
    //     });
    // }
    return(
    <div >
        <h1>Add an Author</h1>
        <form onSubmit={submitHandler} >
            <div className="row border boder-warning col-8 mx-auto">
                <div className="d-flex flex-column align-items-start col-8 border boder-warning p-2">
                    <label className='form-label'>Author Name:</label>
                    <input id='authorName' type="text" className='form-control' onChange={(e) => setAuthor(e.target.value)} />
                    <label className='form-label'>Quote: </label>
                    <textarea id='authorQuote' type="text" className='form-control' onChange={(e) => setQuote(e.target.value)} />
                </div>
                <div className="d-flex flex-column justify-content-center col-4 border boder-warning align-items-center  ">
                    <button type='submit' className='btn btn-info m-2 '>Submit</button>
                    {/* <button className='btn btn-danger m-2' onClick={cancelSubmit}>Cancel</button> */}
                </div>
            </div>
        </form>

    </div>
)}

export default AddAuthor