import React, { useEffect } from 'react';

const AddItems = () => {
    const handleAddProduct = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const imageUrl = e.target.imageUrl.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplierName = e.target.supplierName.value;
        const description = e.target.description.value;
        console.log(name, imageUrl, price, quantity, supplierName, description);
        const url = 'https://limitless-plateau-89158.herokuapp.com/product';
        fetch(url,{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({name:name, imageUrl: imageUrl, price: price, quantity: quantity, supplierName: supplierName, description: description }),
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
    }
    useEffect(()=>{
        fetch("https://limitless-plateau-89158.herokuapp.com/product")
        .then(res=> res.json())
        .then(data=> console.log(data))
    },[])
    return (
        <div className='pt-5'>
            <h2 className='text-center'>Add New item</h2>
            <form className='d-flex flex-column w-50 m-auto' onSubmit={handleAddProduct}>
                <input className='mb-3' type="text" placeholder="product name" name="name" required ></input>
                <input className='mb-3' type="url" placeholder="image url" name="imageUrl" required ></input>
                <input className='mb-3' type="number" placeholder="price" name="price" required ></input>
                <input className='mb-3' type="number" placeholder="product quantity" name="quantity" required ></input>
                <input className='mb-3' type="text" placeholder="supplier name" name="supplierName" required ></input>
                <textarea className='mb-3' type="textarea" placeholder="description" name="description" required ></textarea>
                <input type="submit" ></input>
            </form>
        </div>
    );
};

export default AddItems;