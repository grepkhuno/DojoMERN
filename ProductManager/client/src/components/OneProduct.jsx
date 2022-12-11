import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'


const OneProduct = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getProductByID/${id}`)
            .then((res) => {
                console.log(res.data)
                setOneProduct(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteAProduct/${id}`)
            .then((res) => {
                console.log(res.data)
                navigate('/ProductList')
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h2>{oneProduct.productName}</h2>
            <img className='ProcImg' src={oneProduct.productImg} />
            <p>Price: {oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <Link to={`/editProduct/${oneProduct._id}`}> Edit Product</Link>
            <button className='btn btn-danger' onClick={ deleteHandler }>Delete Product</button>
        </div>
    )
}

export default OneProduct