import React, { useEffect, useState } from 'react';
import "./Admin.css"
import {Link} from "react-router-dom"
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';

const Admin = () => {
    const[ClickValue,setClickValue] = useState({
        isClicked:true,
    })
    const[details,setDetail] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-tor-48752.herokuapp.com/getItems')
        .then(res => res.json())
        .then(data => setDetail(data))
    },[])
    //....Add product button
    const handleAddproduct = () =>{
        const newClickValue = {...ClickValue};
        newClickValue.isClicked = true;
        setClickValue(newClickValue)
        console.log(ClickValue);
    }
    //.....Manage product button
    const handleManageProduct = () =>{
        const newClickValue = {...ClickValue};
        newClickValue.isClicked = false;
        setClickValue(newClickValue);
        console.log(ClickValue);
    }
    return (
        <div>
            <div>    
            <div className="sidenav">
            <Link onClick={handleAddproduct}>Add product</Link>
            <Link onClick={handleManageProduct}>Manage</Link>
            </div>

            <div className="main">
                {ClickValue.isClicked?
                     <AddProduct></AddProduct>
                    :
                   <div>
                       {
                           details.map(detail => <ManageProduct detail={detail}></ManageProduct>)
                       }
                   </div>
                }
            </div>
        </div>
        </div>
    );
};

export default Admin;