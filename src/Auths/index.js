import React, { useState } from "react";
// import { useNavigate } from "react-router";
import './index.css'
import SignUp from "./SignUp";
import Login from "./Login";

export default function AuthModal(props){
    
    return (<>
    {props.type==='Loging'?<Login/>:<SignUp />}
    </>)
}