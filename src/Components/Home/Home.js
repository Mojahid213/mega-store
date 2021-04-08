import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';

const Home = () => {
    const[details,setdetails] = useState([])
    useEffect(()=>{
        fetch('https://tranquil-tor-48752.herokuapp.com/getItems')
        .then(res => res.json())
        .then(data => setdetails(data))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 m-0">
            {
                details.map(detail => <Carts detail={detail}></Carts>)
            }
        </div>
    );
};

export default Home;