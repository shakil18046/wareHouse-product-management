import React from 'react';
import helathy from "../../../img/Group-78.png"
import "./HealthyLife.css"
const HealthyLife = () => {
    return (
        <div className='section-padding'>
            <div className='container'>
                <div className='row'>
                <div className='healthyLife-image-wrapper col-md-6'>
                    <img src={helathy} alt=''/>
                </div>
                <div className='healthyLife-content-wrapper col-md-6 d-flex flex-column justify-content-center'>
                    <h2>Healthy life.
Happy Perfect Life</h2>
<p>From reserved farms around the world</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HealthyLife;