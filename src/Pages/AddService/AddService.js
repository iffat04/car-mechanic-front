import axios from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    /*
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
         console.log(data);
         fetch("http://localhost:5000/services",{
            method : "POST",
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    */

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
         console.log(data);
         axios.post('http://localhost:5000/services',data)
         .then(res=>{
            console.log(res);
            console.log('abc')
            const id= res.data.insertedId;
            if(id){
                alert('inserted successfully');
                reset()
            }
         })
    }
     
    return (
     

        <div className='addService'>
            <h1>add Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image-URL" />
                <input type="submit" />
            </form>
            
        </div>
    );

};

export default AddService;