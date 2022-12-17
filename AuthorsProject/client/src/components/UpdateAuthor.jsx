import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const UpdateAuthor = () => {
    const [authorsList, setAuthorsList] = useState([])

    const [author, setAuthor] = useState('')
    const [quote, setQuote] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getAuthorByID/${id}`)
            .then((res) => {
                console.log(res.data)
                setAuthor(res.data.author)
                setQuote(res.data.quote)
            
            }).catch((err) => {
                console.log(err)
            })
    }, []);

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateAuthorByID/${id}`, {
            author,
            quote
        })
            .then((res) => {
                console.log(res.data)
                navigate('/getAllAuthors')
            }).catch((err) => {
                console.log(err)
            })

    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
            .then((res) => {
                console.log(res.data)
                navigate('/getAllAuthors')
            }).catch((err) => {
                console.log(err)
            })
    }

  return (
 <div >
        <h1>Modify Author</h1>
        <form onSubmit={submitHandler} >
            <div className="row border boder-warning col-10 mx-auto">
                <div className="d-flex flex-column align-items-start col-8 border boder-warning p-2">
                    <label className='form-label'>Author Name:</label>
                    <input value={author} id='authorName' type="text" className='form-control' onChange={(e) => setAuthor(e.target.value)} />
                    <label className='form-label'>Quote: </label>
                    <textarea value={quote} id='authorQuote' type="text" className='form-control' onChange={(e) => setQuote(e.target.value)} />
                </div>
                <div className="d-flex flex-column justify-content-center col-4 border boder-warning align-items-center  ">
                    <button type='submit' className='btn btn-info m-2 '>Edit Author</button>
                    {/* <button className='btn btn-danger m-2 ' onClick={ handleDeleteAuthor(id)}>Delete</button> */}

                    <button className='btn btn-danger m-2' onClick={deleteHandler} >Delete</button>
                    <button className='btn btn-warning m-2' to={"/getAllAuthors"} >Cancel</button>

                </div>
            </div>
        </form>

    </div>

  )
}

export default UpdateAuthor