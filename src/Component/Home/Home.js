import React from 'react';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner';
import HealthyLife from './HealthyLife/HealthyLife';
import Partner from './Partners/Partner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <HealthyLife></HealthyLife>
            <Partner></Partner>
        </div>
    );
};

export default Home;