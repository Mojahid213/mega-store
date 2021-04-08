import React from 'react';

const OrderItems = ({detail}) => {
    const deleteEvent = (id) =>{
        fetch(`https://tranquil-tor-48752.herokuapp.com/deleteOrderItem/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            // console.log('successfully deleted');
            console.log(data);
        })
    }
    return (
        <div>
            <div className="p-2 m-1 bg-danger text-dark container rounded d-flex justify-content-around">
        <div className="text-center fw-bold" style={{width:'200px'}}>
            <p>{detail.pdName}</p>
        </div>
        <div className="text-center fw-bold" style={{width:'200px'}}>
            <p>$ {detail.pdPrice}</p>
        </div>
        <div className="text-center fw-bold" style={{width:'200px'}}>
            <button className="btn btn-primary" onClick={()=> deleteEvent(detail._id)}>Delete</button>
        </div>
        </div>
        </div>
    );
};

export default OrderItems;