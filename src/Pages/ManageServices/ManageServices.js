import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services,setServices]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])

    const handleDelete = id =>{
        const proceed = window.confirm('are u sure u want to delete??')
        if(proceed){
        const url = `http://localhost:5000/services/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('delete success');
                const rest = services.filter(service=>service._id !== id);
                setServices(rest);
            }
        })
    }

    }
    return (
        <div>
            <h3>Manage Services</h3>
            {
              services.map(service=><div key={service._id}>
                  <span>
                  <p>{service.name}</p>
                  <button onClick={()=>handleDelete(service._id)} style={{color:"red"}}>X</button>
                  <button>Update</button>
                  </span>
              </div>)
            }

        </div>
    );
};

export default ManageServices;