import React, { useEffect, useState } from 'react';
import SingelProduct from './SingelProduct';
import "./ManageItems.css"
import { useNavigate } from 'react-router-dom';
const ManageItems = () => {
    const navigate = useNavigate();

    const navigateAddNewItem = ()=>{
        navigate("/AddItems")
    }
    return (
        <div className='product-wrapper container'>
            <div className='text-center pt-5 pb-5' ><button className='btn-success' onClick={navigateAddNewItem}>add new item</button></div>
           
            {
                <SingelProduct></SingelProduct>
                
            }
        </div>
    );
};

export default ManageItems;