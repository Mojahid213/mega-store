import React, { useContext, useState } from 'react';
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Config/firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }

const Login = () => {
    const[user,setuser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    //Google sign in 
    const handleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const{displayName,email} = result.user;
            const newUser = {...user};
            newUser.userName = displayName;
            newUser.email = email;
            newUser.isSignin = true;
            setuser(newUser);
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });
    }
    return (
        <div className="text-center m-5 p-5">
            <h4>Please Sign in</h4>
            <button onClick={handleSignIn} className="btn btn-success"><i className="bi bi-google"></i> Sign in with google</button>
        </div>
    );
};

export default Login;