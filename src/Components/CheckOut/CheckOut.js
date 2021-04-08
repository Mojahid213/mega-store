import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import CheckDetail from '../CheckDetail/CheckDetail';

const CheckOut = () => {
    const[pdInfo,setpdInfo] = useState([])
    const[user,setuser] = useContext(userContext);
    useEffect(()=>{
            fetch('https://tranquil-tor-48752.herokuapp.com/addOrders',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
    },[user]);
    useEffect(()=>{
        fetch('https://tranquil-tor-48752.herokuapp.com/ShowItems?email='+user.email)
        .then(res => res.json())
        .then(data => setpdInfo(data))
    });
    return (
        <div>
            <div  className="container mt-5 mb-3">
                <h3 className="text-dark">Checkout</h3>
            </div>
           <div  className="row m-0">
           {
               pdInfo.map(detail => <CheckDetail detail={detail} key={detail._id}></CheckDetail>)
           }
           </div>
          <div>
          </div>
        </div>
    );
};

export default CheckOut;