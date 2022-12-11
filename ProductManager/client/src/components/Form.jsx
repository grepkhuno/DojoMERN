import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [productImg, setProductImg] = useState('')

    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addProduct', {
            productName,
            price,
            description,
            productImg
        }).then((res) => {
            console.log(res)
            navigate('/ProductList')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='col-6 mx-auto'>
            <h1> Add a Product</h1>
            <form onSubmit={onSubmitHandler}>
                <label className='form-label'>Product Name:</label>
                <input type="text" className='form-control' onChange={(e) => setProductName(e.target.value)} />
                <label className='form-label'>Price: </label>
                <input type="number" className='form-control' onChange={(e) => setPrice(e.target.value)} />
                <label className='form-label'>Description:</label>
                <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} />
                <label className='form-label'>Picture link:</label>
                <input type="text" className='form-control' onChange={(e) => setProductImg(e.target.value)} />
                <button className='btn btn-info mt-3'>Submit</button>
            </form>

        </div>
    )
}

export default Form