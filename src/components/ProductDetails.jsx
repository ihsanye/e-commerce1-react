import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice'

function ProductDetails() {
    const { id } = useParams()
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 1) { setCount(count - 1) }
    }

    const addBasket = () => {
        const payload = { id, count, price, image, title, description }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket())
    }

    const dispatch = useDispatch()

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    return (
        <div style={{ height: '100vh' }}>
            <img src={image} alt="product image" style={{ width: '120px' }} />
            <h2>$ {price} </h2>
            <div><FaPlus onClick={increment} /> {count} <FaMinus onClick={decrement} />
                <button onClick={addBasket} style={{ margin: '0px 5px', padding: '4px', borderRadius: '10px' }}>Sepete Ekle</button>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div >
    )
}

export default ProductDetails