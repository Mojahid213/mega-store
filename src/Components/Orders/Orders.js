import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderItems from '../OrderItems/OrderItems';

const Orders = () => {
    const[user,setuser] = useContext(userContext);
    const[theInfo,settheInfo] = useState([])
    useEffect(()=>{
        fetch('https://tranquil-tor-48752.herokuapp.com/ShowItems?email='+user.email)
        .then(res => res.json())
        .then(data => settheInfo(data))
    },[user.email]);
    return (
        <div className="container-fluid">
            <div className="container">
            <p className="text-dark bg-primary m-5 fw-bold fs-2 text-center">Your order summery</p>
            </div>
            <div className="row">
                {
                    theInfo.map(detail => <OrderItems detail={detail} key={detail._id}></OrderItems>)
                }
            </div>
        </div>
    );
};

export default Orders;