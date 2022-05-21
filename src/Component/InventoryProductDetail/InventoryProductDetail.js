import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "./InventoryProductDetail.css";
import 'react-toastify/dist/ReactToastify.css';
const InventoryProductDetail = () => {
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const {_id} = useParams();
    console.log(_id);
    useEffect(()=>{
        const url = `https://limitless-plateau-89158.herokuapp.com/product/${_id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProduct(data))
    },[_id])
    let newQuantity;
    const handleQuantity = async ()=>{
        
        const productQuantity = parseInt(product.quantity);
        newQuantity = productQuantity - 1;
        console.log(newQuantity)
        
        product.quantity=newQuantity;
        if(newQuantity < 2){
            console.log("tham")
        }else{
            const newData = { quantity: product.quantity }
        await axios.put(`https://limitless-plateau-89158.herokuapp.com/product/${_id}`, newData)
        axios.get(`https://limitless-plateau-89158.herokuapp.com/product/${_id}`)
            .then(response => {
                setProduct(response.data)
                
            })
            toast('product delevired')
        }
            

    }
    let reStock;
            const hanldeRestock = async (e) => {
                e.preventDefault()
        
                reStock = parseInt(e.target.reStock.value)
        
                const reStockQuantity = parseInt(reStock)
                const totalReStockQuantity = reStockQuantity + parseInt(product.quantity)
                const newReStockQuantity = { quantity: totalReStockQuantity }
        
                if (reStockQuantity <= 0) {
        
                    toast('Please Input valid amount')
        
                    return
                }
        
                await axios.put(`https://limitless-plateau-89158.herokuapp.com/product/${_id}`, newReStockQuantity)
                axios.get(`https://limitless-plateau-89158.herokuapp.com/product/${_id}`)
                    .then(response => {
                        setProduct(response.data)
                        toast('Item Restock Successfully')
                    })
        
            }
            const navigateToManageinv = ()=>{
                navigate("/ManageItems")
            }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className='container'>
            
            <div className='product-details-wrapper'>
                <div><img src={product.imageUrl} alt=''></img></div>
                <div><h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>price:{product.price}</p>
                <p>supplier Name:{product.supplierName}</p>
                <p>quantity:{product.quantity}</p>
                <button className='btn-success' onClick={handleQuantity}>deliver</button></div>
            </div>
            <div className='w-50 m-auto' >
            <form className='' onSubmit={hanldeRestock}>
                        <h1>Re stock this items</h1>
                        <div><label className="form-label" htmlFor="reStock">Enter the quantity </label>
                        <input className="form-control  " type="number" name='reStock' /></div>
                        <div><button type="submit" className="btn  btn-success mt-3">Submit</button></div>
                    </form>
                    <div><button onClick={navigateToManageinv} className='btn-success mt-2'>manage inventuries</button></div>
            </div>
        </div>
        </div>
    );
};

export default InventoryProductDetail;