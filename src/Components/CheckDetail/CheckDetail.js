import React from 'react';

const CheckDetail = ({detail}) => {
    return (
            <div className="p-2 m-1 text-dark container rounded d-flex justify-content-around">
        <div className="text-center fw-bold" style={{width:'200px'}}>
            <p>{detail.pdName}</p>
        </div>
        <div className="text-center fw-bold" style={{width:'200px'}}>
            <p>$ {detail.pdPrice}</p>
        </div>
        </div>
    );
};

export default CheckDetail;