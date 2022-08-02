import React, { useState } from "react";
import { Facebook, Mail } from "react-feather";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "reactstrap";
import { login } from "../redux/action/auth";
import "./index.css";

export default function Login({ setType, toggle }) {

	const dispatch = useDispatch()

	const [form, setForm] = useState({
		email: '',
		password: ''
	})
	const handleChange = ({ target: { name, value } }) => {
		setForm((p)=>({...p, [name]: value }))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(login(form,()=>toggle()))
	}
	return (
			<Form onSubmit={handleSubmit}>
		<div className="singIn">
			<h1
				className="SingUp-first-header"
				style={{
					marginTop: 50,
				}}
			>Login</h1>
			<div className="input-div" >	
				<Input onChange={handleChange} name='email' className="SingUp-first-input" type="Email" placeholder="Email" />
			</div>
			<div className="input-div" >
				<Input onChange={handleChange} className="SingUp-first-input" name="password"  type="password" placeholder="Password" />
			</div>
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
				<label style={{ display: "flex", flexDirection: "row", width: 300 }} className="labe-for-sign">
					<Input type="checkbox" style={{
						margin: 15,
					}} className="labe-for-sign2" />
					<p style={{ marginTop: 9 }}>Remember me</p>
				</label>
				<a href="" className="href" >forget password</a>
			</div>
			<Button type="submit" className="btn-for-signUp">Login</Button>
		
			<br/>
			<p className="text-center">- OR -</p>
			<br/>
			<Button className="btn-for-signUp3"><Mail style={{ color: "#fff", width: 18, height: 17, borderRadius: 4, float: "left", margin: 3 }} />Login with Google</Button>
			<Button className="btn-for-signUp2"><Facebook style={{ color: "#FFFFFF", width: 18, height: 17, borderRadius: 4, float: "left", margin: 3 }} />Login With Facebook</Button>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<p style={{
					marginLeft: 15
				}} >New user ?</p>
				{// eslint-disable-next-line
						}
				<a href="/#" style={{ marginLeft: 15 }} onClick={(e)=>{e.preventDefault(); setType('Signup')}}>Sign Up Here</a>
			</div>
		</div>	</Form>
	)
}
