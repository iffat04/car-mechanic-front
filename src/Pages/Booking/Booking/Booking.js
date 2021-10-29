import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService]= useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <div className="service pb-3">
            <img width="200px" height="400px" src={service.img} alt="" />
            <h3>{service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p className="px-3">{service.description}</p>
    
        </div>
        </div>
    );
};

export default Booking;