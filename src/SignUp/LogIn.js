import React, { useState } from "react";
import { Modal, ModalBody, } from 'reactstrap';
import { Facebook, Mail } from "react-feather";
// import { useNavigate } from "react-router";
import './index.css'
import SignUp from "./SignUp";

export default function Login(props){
    const {
      className
    } = props;

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
      setNestedModal(!nestedModal);
      setCloseAll(false);
    }
    const [form , setForm] = useState({ password: '',email: ''})
    // const navigate = useNavigate();

    const handleChange = ({target:{name,value}})=>{
        setForm(p => ({
            ...p, [name]:value
        }))
    }

    const handleSubmit = ()=>{
        let formChar = String
        if( form.email==="" || form.password===""){
            alert("All value are required")
        }
        console.log(form)
    }
    return(
        <div className="singIn">
            {/* {JSON.stringify(form)} */}
            <h1
                className="Login-first-header"
                style={{
                    marginTop: 50,
                    fontSize:25
                }}
            >Login</h1>
            <input 
                className="Login-first-input" 
                type="Email" 
                placeholder="Email" 
                name="email"
                value={form.email}
                onChange={handleChange} 
            />
            <input 
                className="Login-first-input" 
                type="password" 
                placeholder="Password" 
                name="password"
                value={form.password}
                onChange={handleChange} 
            />
            <div 
                style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between"
                }}
            >
                <label 
                    style={{
                        display:"flex",
                        flexDirection:"row",
                        width:150
                    }} 
                    className="labe-for-sign"
                >
                    <input 
                        type="checkbox" 
                        style={{
                            margin:15,
                            cursor:"pointer"
                    }} 
                    className="labe-for-sign2" />
                    <p style={{marginTop:9}}>Remember me</p>
                </label>
                <a href="" 
                    className="href" 
                    onClick={e =>{
                        e.preventDefault();
                    } }                   
                >forget password</a>
            </div>
            <button 
                className="btn-for-login"
                onClick={handleSubmit}
            >Login</button>
            <button className="btn-for-login2"><Facebook style={{color:"#344f88",width:18, height:17, borderRadius:4,float:"left",margin:3 }} />Login With Facebook</button>
            <button className="btn-for-login3"><Mail style={{color:"#fff",width:18, height:17, borderRadius:4,float:"left",margin:3,backgroundColor:"#a41b15" }}/>login with google</button>
            <div style={{display:"flex",flexDirection:"row"}}>
                <p style={{
                        marginLeft:15,
                        marginTop:8
                    }} >New user ?</p>
                <button className="nessted" style={{marginLeft:15}}onClick={toggleNested}>Sign Up Here</button>
                <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                      <ModalBody> <SignUp /> </ModalBody>
                  </Modal>
            </div>
        </div>
    )
}