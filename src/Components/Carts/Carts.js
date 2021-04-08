import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../../App';

const Carts = ({detail}) => {
    let history = useHistory();
    // const[theDetail,settheDetail] = useState({})
    const[user,setuser] = useContext(userContext)

    const handleBuyNow = () =>{
       const NewUserDetail = {...user};
       NewUserDetail.pdName = detail.name;
       NewUserDetail.pdPrice = detail.price;
       NewUserDetail.pdImg = detail.ImgUrl;
       setuser(NewUserDetail);
    history.push('/checkout')

    }
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                <img src={detail.ImgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{detail.name} - {detail.quantity}</h5>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-around align-items-center">
                            <h3>$ {detail.price}</h3>
                            <button onClick={handleBuyNow} className="btn btn-success">Buy now</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;