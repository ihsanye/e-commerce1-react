import React from 'react'
import '../css/product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { id, price, image, title, description } = product;
    const navigate = useNavigate();

    return (
        <div className='card flex-column'>
            <img className='image' src={image} alt="product image" />
            <div>
                <p style={{ textAlign: 'center', height: '60px', overflow: 'auto' }}>{title}</p>
                <h4 style={{ textAlign: 'center' }}>$ {price}</h4>
            </div>
            <div><button onClick={() => navigate('/product-details/' + id)} >Detaya Git
            </button></div>

        </div>
    )
}

export default Product