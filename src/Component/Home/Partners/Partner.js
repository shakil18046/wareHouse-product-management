import React from 'react';
import firstImage from "../../../img/l-1.png";
import secondImage from "../../../img/l-2.png";
import thirdImage from "../../../img/l-3.png";
import fourthImage from "../../../img/l-4.png";
import fifthImage from "../../../img/l-5.png";
import "./Partner.css"
const Partner = () => {
    return (
        <div>
            <div className='container'>
                <div className='text-center partner-heading'>OUR PARTNERS</div>
                <div className='custom-grid'>
                <img src={firstImage} alt=''/>
                <img src={secondImage} alt=''/>
                <img src={thirdImage} alt=''/>
                <img src={fourthImage} alt=''/>
                <img src={fifthImage} alt=''/>
                </div>
               
            </div>
        </div>
    );
};

export default Partner;