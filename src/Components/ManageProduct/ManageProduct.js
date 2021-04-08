import React from 'react';

const ManageProduct = ({detail}) => {
    const deleteBtn = (event,id) =>{
        fetch(`https://tranquil-tor-48752.herokuapp.com/deleteOrderItem/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div>
            <div className="p-2 m-1 bg-danger text-dark container rounded d-flex justify-content-around">
        <div className="text-center" style={{width:'200px'}}>
            <p>{detail.name}</p>
        </div>
        <div className="text-center" style={{width:'200px'}}>
            <p>$ {detail.price}</p>
        </div>
        <div className="text-center" style={{width:'200px'}}>
            <button className="btn btn-success">Update</button>
        </div>
        <div className="text-center" style={{width:'200px'}}>
            <button className="btn btn-primary" onClick={()=> deleteBtn(detail._id)}>Delete</button>
        </div>
        </div>
        </div>
    );
};

export default ManageProduct;