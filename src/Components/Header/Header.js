import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { userContext } from '../../App';
import "./Header.css"

const Header = () => {
    const[user,setuser] = useContext(userContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1 custom_z_index">
            <div className="container d-flex">
                <Link className="navbar-brand" style={{fontWeight:'bold'}} to="/"><span className="text-danger">Mega</span> Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/orders">Orders</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/deals">Deals</Link>
                    </li>
                    <li className="nav-item">
                        {user.isSignin ?
                        <p className="nav-link text-light fw-bold" tabIndex="-1">{user.userName}</p>
                        :<Link className="nav-link text-light btn btn-success" to="/login" tabIndex="-1">Login</Link>
                        }
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;