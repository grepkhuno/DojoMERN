import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const UpdateProduct = () => {

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [productImg, setProductImg] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getProductByID/${id}`)
            .then((res) => {
                console.log(res.data)
                setProductName(res.data.productName)
                setPrice(res.data.price)
                setDescription(res.data.description)
                setProductImg(res.data.productImg)
            }).catch((err) => {
                console.log(err)
            })
    }, []);

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateProductByID/${id}`, {
            productName,
            price,
            description,
            productImg
        })
            .then((res) => {
                console.log(res.data)
                navigate('/ProductList')
            }).catch((err) => {
                console.log(err)
            })

    }
    return (
        <div className='col-6 mx-auto'>
            <h1> Edit Product Information</h1>
            <form onSubmit={SubmitHandler}>
                <label className='form-label'>Product Name:</label>
                <input value={productName} type="text" className='form-control' onChange={(e) => setProductName(e.target.value)} />
                <label className='form-label'>Price: </label>
                <input value={price} type="number" className='form-control' onChange={(e) => setPrice(e.target.value)} />
                <label className='form-label'>Description:</label>
                <input value={description} type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} />
                <label className='form-label'>Picture link:</label>
                <input value={productImg} type="text" className='form-control' onChange={(e) => setProductImg(e.target.value)} />
                <button className='btn btn-info mt-3'>Submit</button>
            </form>

        </div>
    )
}

export default UpdateProduct