import React from 'react';
import bannerImg from "../../img/banner.png";
import "./Banner.css"
const Banner = () => {
    return (
        <div className=' banner-area'>
            <div className='container'>
                <div className='banner-content'>
                    <h1>fresh food <br></br> for fresh mood</h1>
                    <div><button className='shop-now-btn'>shop now</button></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;