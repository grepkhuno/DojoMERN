import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = () => {

    const [productsList, setProductsList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/getAllProducts')
            .then((res) => {
                console.log(res.data)
                setProductsList(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='d-flex flex-wrap mt-5'>
            {
                productsList.map((lista) => (
                    <div>
                        <Link className='d-block' to={`/getProductByID/${lista._id}`}>{lista.productName}</Link>
                        <img className='ProcImg col col-5' src={lista.productImg} />
                    </div>
                ))
            }

        </div>
    )
}

export default ProductList