import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css";
import { useParams, Link, useNavigate } from 'react-router-dom'

const AuthorsList = () => {

    const [authorsList, setAuthorsList] = useState([])
    const [author, setAuthor] = useState('')
    const [quote, setQuote] = useState('')
    const [id, setID] = useState('')

    const navigate = useNavigate()
    // const { id } = useParams()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/getAllAuthors')
            .then((res) => {
                console.log(res.data)
                setAuthorsList(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='d-flex flex-column align-items-center col-10 border boder-warning p-2'>
            <h1>Author's List</h1>
            {
                authorsList.map((lista) => (
                    <div>
                        <Link className='' onChange={(e) => setAuthor(e.target.value)} to={`/getAuthorByID/${lista._id}` }>{lista.author}</Link>
                        <div className='' onChange={(e) => setQuote(e.target.value)} > {lista.quote}</div>

                    </div>
                ))
            }

        </div>
    )
}

export default AuthorsList