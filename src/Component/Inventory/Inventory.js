import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Inventory.css"
const Inventory = () => {
    const [products, setProducts] = useState([]);
    const url = "https://limitless-plateau-89158.herokuapp.com/product"
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    const navigate = useNavigate();
    const sliceProducts = products.slice(0, 6)
    console.log(sliceProducts.length)
    const navigatetosingleproduct = (_id)=>{
        console.log(_id)
        navigate(`/product/${_id}`)
    }
    return (
        <div className='inventory-product-wrapper container'>
            {
                sliceProducts.map(product=> <div className='inventory-singel-product'>
                    <img src={product.imageUrl} alt=""></img>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>price: {product.price}</p>
                    <p>quantity: {product.quantity}</p>
                    <p>supplier: {product.supplierName}</p>
                    <button onClick={()=>navigatetosingleproduct(product._id)} className='inventory-product-btn'>update</button>
                </div>)
            }
        </div>
    );
};

export default Inventory;