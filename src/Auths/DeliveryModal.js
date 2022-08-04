import React, { useState } from "react";
import { Facebook, Mail } from "react-feather";
import { useDispatch } from "react-redux";
import { Button, Form, Input, Row } from "reactstrap";
import { login } from "../redux/action/auth";
import "./index.css";

export default function Login({ setType, toggle }) {

	const dispatch = useDispatch()

	const [form, setForm] = useState({
		address: '',
		deveryType: '',
        delivery_data_range:'',
        sub_total:0,
        ship_fee:0,
        total:0,
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
                <Row>
                    <h3>Shipment/Delivery process</h3>
                </Row>
                <Row>
                     <Col md={6}>poo</Col>
                </Row>
		</Form>
	)
}
