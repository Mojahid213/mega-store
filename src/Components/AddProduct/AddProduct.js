import React, { useState } from 'react';
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const[ImgUrl,setImgUrl] = useState('');

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price:data.price,
            quantity:data.quantity,
            ImgUrl: ImgUrl
        };
        const url = `https://tranquil-tor-48752.herokuapp.com/addProducts`;

        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productData)
        })
    };

    //....Upload image..
    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','338a6f420fe5f0562de8cdb5881af790');
        imageData.append('image',event.target.files[0]);
         
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImgUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="mt-5 container text-center">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <input className="m-1" name="name" placeholder="name" {...register("name")} />
        <input className="m-1" type="number" name="price" placeholder="price" {...register("price")}/>  
        </div>
        <div>
        <input className="m-1" type="text" name="quantity" placeholder="quantity" {...register("quantity")}/>
        <input className="m-1" type="file" name="exampleRequired" onChange={handleImageUpload}/>  
        </div>  
        <div className="text-center">
        <input type="submit" />
        </div>
    </form>
        </div>
    );
};

export default AddProduct;