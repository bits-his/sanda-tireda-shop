import React, { useState } from "react";
import { Facebook, Mail } from "react-feather";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "reactstrap";
import { signup } from "../redux/action/auth";
import CustomButton from "./CustomButton";
import toast, { Toaster } from 'react-hot-toast';

export default function SignUp({ setType, toggle }) {
  const [loading, setLoading] = useState(false)

	// const { auth:{authenticated} } = useSelector((s)=>s)
	const dispatch = useDispatch()
	const [form, setForm] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		phone: '',
		username: '',
		// branch_name: 'Online Store',
		status:'approved',
	})

	const handleChange = ({ target: { name, value, type, checked } }) => {

		setForm((s)=>({...s, [name]: type === 'checked' ? checked : value }))
	}
	const handleSubmit = (e) => {
		setLoading(true)
		e.preventDefault()
		console.log(form);
		const data =  {...form, business_name:form.username, branch_name:form.username}
		dispatch(signup(data,()=>{
			setLoading(false)
			toast.success("Login successfully")
			toggle()
		}, (er) =>{ 
			setLoading(false)
			console.log(er)
			toast.error("Unable to login")
		}))
	}

	return (
		<Form onSubmit={handleSubmit}>
			<div className="singIn2">
				<div>
			<Toaster />
					<h1 className="SingUp-first-header" >Create New Account</h1>
					{/* {JSON.stringify(form)} */}
					<div className="input-div" >
						<Input
							className="SingUp-first-input"
							type="text"
							placeholder="First Name"
							name="firstname"
							value={form.firstname}
							onChange={handleChange}
						/>
						<Input
							className="SingUp-first-input"
							type="text"
							placeholder="Last Name"
							name="lastname"
							value={form.lastname}
							onChange={handleChange}
						/>
					</div>
					<div className="input-div" >
						<Input
							type="text"
							placeholder="Phone Number (+234)"
							className="SingUp-first-input"
							name="phone"
							value={form.phone}
							onChange={handleChange}
						/>
						<Input
							className="SingUp-first-input"
							type="Email"
							placeholder="Email"
							name="email"
							value={form.email}
							onChange={handleChange}
						/>
					</div>

					<div className="input-div" >
						<Input
							className="SingUp-first-input"
							type="textarea" 
							name="address"
							value={form.address}
							placeholder="Address" 
							onChange={handleChange}
						/>
					</div>
					<div className="input-div" >
						<Input
							className="SingUp-first-input"
							type="text"
							placeholder="Username"
							name="username"
							value={form.username}
							onChange={handleChange}
						/>
						<Input
							className="SingUp-first-input"
							type="text"
							placeholder="Password"
							name="password"
							value={form.password}
							onChange={handleChange}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<label
							style={{
								marginLeft: 15,
								marginBottom: 10

							}}>
							<Input
								style={{
									cursor: "pointer",
									marginLeft: 4
								}}
								type="checkbox"
								name="accepted_terms"
								checked={form.accepted_terms}
								value={form.accepted_terms}
								onChange={handleChange}
							/>
							<span
								style={{
									marginLeft: 10
								}}
								className="cursor"
							>I accecpt the
							</span>
							<a href=""
								className="href"
								style={{
									marginLeft: 4
								}} >Term & Condition</a>and Privacy and Cookie Notice.
						</label>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<CustomButton loading={loading} type="submit" onClick={handleSubmit} className="btn-for-signUp">Login</CustomButton>
						{/* <button
							
							className="btn-for-signUp"
						>Sign Up</button> */}
						<br />
						<p className="text-center">- OR -</p>
						<br />
						<Button className="btn-for-signUp3"><Mail style={{ color: "#fff", width: 18, height: 17, borderRadius: 4, float: "left", margin: 3 }} />Login with Google</Button>
						<Button className="btn-for-signUp2"><Facebook style={{ color: "#FFFFFF", width: 18, height: 17, borderRadius: 4, float: "left", margin: 3 }} />Login With Facebook</Button>
					</div>
					<div style={{ display: "flex", flexDirection: "row", margin: 10 }}>
						<p>Already have an Account ?</p>
						{// eslint-disable-next-line
						}
						<a href="/#" type="button" onClick={(e) => { e.preventDefault(); setType('Login')}} style={{ marginLeft: 15 }}>LogIn</a>
					</div>
				</div>
			</div>
		</Form>
	)
}