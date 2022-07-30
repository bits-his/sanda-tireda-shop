import React from "react";
import { Facebook, Mail } from "react-feather";
import { useNavigate } from "react-router";
import "./index.css";

export default function Login(){
    const navigate = useNavigate();
    return(
        <div className="singIn">
            <h1
                className="SingUp-first-header"
                style={{
                    marginTop: 50,
                }}
            >Login</h1>
            <input className="SingUp-first-input" type="Email" placeholder="Email" />
            <input className="SingUp-first-input" type="password" placeholder="Password" />
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <label style={{display:"flex",flexDirection:"row",width:150}} className="labe-for-sign">
                    <input type="checkbox" style={{
                        margin:15,
                    }} className="labe-for-sign2" /> 
                    <p style={{marginTop:9}}>Remember me</p>
                </label>
                <a href="" className="href" >forget password</a>
            </div>
            <button className="btn-for-signUp">Login</button>
            <button className="btn-for-signUp3"><Facebook style={{color:"#344f88",width:18, height:17, borderRadius:4,float:"left",margin:3 }} />Login With Facebook</button>
            <button className="btn-for-signUp2"><Mail style={{color:"#fff",width:18, height:17, borderRadius:4,float:"left",margin:3,backgroundColor:"#a41b15" }}/>login with google</button>
            <div style={{display:"flex",flexDirection:"row"}}>
                <p style={{
                        marginLeft:15
                    }} >New user ?</p>
                <a href="" className="href1" style={{marginLeft:15}} onClick={e => {
                    e.preventDefault();
                    navigate('/sign-up')
                }}>Sign Up Here</a>
            </div>
        </div>
    )
}
