import React, { useEffect, useState } from 'react';
import "./SingelProduct.css";
import trash from "../../img/trash-bin.png"
const SingelProduct = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        fetch("https://limitless-plateau-89158.herokuapp.com/product")
        .then(res=> res.json())
        .then(data => setProduct(data))
    },[]);
    console.log(products);


    console.log(products);
    const {description, imageUrl, name, price, quantity, supplierName, _id} = products;
    const handleDeleteProduct = (id)=>{
        console.log(id);
        const confirm = window.confirm("are you sure");

        const url = `https://limitless-plateau-89158.herokuapp.com/product/${id}`;
        if(confirm){
            fetch(url,{
                method: "delete"
            })
            .then(res=> res.json())
            .then(data=> {
                const remaining = products.filter(product => product._id !== id)
                setProduct(remaining);
            })
        }
    }
    return (
        <div className='singel-product-wrapper'>
            {
                products.map((product)=> <div className='product-card'>
               <div className='delete-btn-wrapper'> <button className='delete-btn' onClick={()=>handleDeleteProduct(product._id)}><img className='delete-icon' src={trash} alt=""></img></button></div>
                <h2 className='product-name'>{product.name}</h2>
                <img src={product.imageUrl} alt=''></img>
                <h3 className='product-quantity'>Quantity:{product.quantity}</h3>
                
           </div>)
            }
           
        </div>
    );
};

export default SingelProduct;