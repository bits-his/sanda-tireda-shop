import React, { useState } from "react";
import { Modal, ModalBody, } from 'reactstrap';
import { Facebook, Mail } from "react-feather";
import { useNavigate } from "react-router";
import Login from "./LogIn";

export default function SignUp(props){
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
    const [form , setForm] = useState({firstname: '',lastname: '', password: '',email: '',phonenumber:''})
    const [check, setCheck]=useState(false)

    const handleChange = ({target:{name,value}})=>{
        setForm(p => ({
            ...p, [name]:value
        }))
    }
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        let formChar = String
        if(form.firstname===""|| form.lastname==="" || form.email==="" || form.password==="" || form.phonenumber==="" || form.firstname !== String){
            alert("All value are required")
        }
        console.log(form)
    }
    return(
        <div className="singIn2">
            <div>
            <h1 className="SingUp-first-header" >Create New Account</h1>
            {/* {JSON.stringify(form)} */}
            <div className="input-div" >
                <input 
                    className="SingUp-first-input" 
                    type="text" 
                    placeholder="First Name" 
                    name="firstname"
                    value={form.firstname}
                    onChange={handleChange}
                />
                <input 
                    className="SingUp-first-input" 
                    type="text" 
                    placeholder="Last Name"
                    name="lastname"
                    value={form.lastname}
                    onChange={handleChange}
                />
            </div>
            <div className="input-div" >
                <input 
                    className="SingUp-first-input" 
                    type="Email" 
                    placeholder="Email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input 
                    className="SingUp-first-input" 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange} 
                />
            </div>
            <div>
                <p className="span" >+234
                    <input 
                        type="number" 
                        placeholder="Phone Number"  
                        className="SingUp-first-input-number"
                        name="phonenumber"
                        value={form.phonenumber}
                        onChange={handleChange} 
                    />
                </p>
            </div>
            <div style={{display:"flex",flexDirection:"row" }}>
                <label 
                style={{
                    marginLeft:15,
                    marginBottom: 10

                }}>
                    <input 
                        style={{
                            cursor:"pointer" ,
                            marginLeft: 4
                        }}
                        type="checkbox" 
                        name="check"
                        checked={check}
                        value={check}
                        onChange={() => setCheck(!check)} 
                    />
                    <span 
                        style={{
                            marginLeft:10
                        }} 
                    className="cursor" 
                    >I accecpt the
                    </span>
                    <a href="" 
                        className="href" 
                        style={{
                            marginLeft:4
                        }} >Term & Condition</a>and Privacy and Cookie Notice.
                </label>
            </div>
            <div style={{display:"flex",flexDirection:"column" }}>
                <button 
                    onClick={handleSubmit}
                    className="btn-for-signUp" 
                >Sign Up</button>
                <button className="btn-for-signUp2" >
                    <Facebook 
                style={{
                    color:"#344f88",
                    width:18, 
                    height:17, 
                    borderRadius:4,
                    float:"left",
                    margin:3 }} /> Sign Up with facebook</button>
                <button className="btn-for-signUp3">
                    <Mail 
                style={{
                    color:"#fff",
                    width:18, 
                    height:17, 
                    borderRadius:4,
                    float:"left",
                    margin:3,
                    backgroundColor:"#a41b15" }}/>Sign up with google</button>
            </div>
            <div style={{display:"flex",flexDirection:"row",margin:10 }}>
                <p>Already have an Account ?</p>
                <button className="nessted" style={{marginLeft:15}}onClick={toggleNested}>LogIn</button>
                <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                      <ModalBody> <Login /> </ModalBody>
                  </Modal>
            </div>
            </div>
        </div>
    )
}