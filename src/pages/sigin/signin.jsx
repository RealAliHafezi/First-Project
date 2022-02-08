// libraries
import { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// components
import Input from "./input";
// image
import LOGIN from "./../../assets/images/login.jpg";
// styles
const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	background: url(${LOGIN}) no-repeat;
	background-size: cover;
	display: flex;
	z-index: 0;
	& > span {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95));
		z-index: -1;
	}
	@media only screen and (max-width: 546px) {
		background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75));
	}
`;
const Cart = styled.div`
	padding: 1rem 2rem;
	margin: auto auto;
	width: calc(45% - 1rem);
	height: 80%;
	border: 2px solid rgba(215, 127, 161, 0.1);
	border-radius: 10px;
	text-align: center;
	color: var(--white);
	background-color: rgba(215, 127, 161, 0.1);
	backdrop-filter: blur(10px);

	& > h1 {
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-size: 2.5rem;
		margin: 1rem 0 2.5rem;
	}
	@media only screen and (max-width: 768px) {
		width: calc(75% - 1rem);
		border: 1px solid rgba(215, 127, 161, 0.1);
		& > h1 {
			margin: 1rem 0 1.5rem;
			font-size: 2rem;
		}
	}
	@media only screen and (max-width: 546px) {
		width: calc(95% - 1rem);
		padding: 1rem;
	}
`;
const Form = styled.form`
	position: relative;
	text-align: right;
	z-index: 9;
	& > i {
		position: absolute;
		right: 7px;
		color: var(--black);
	}
	& > span {
		color: #4545c0;
		margin-right: 0.5rem;
		cursor: pointer;
	}
	& > h4 {
		margin: 0.5rem;
		font-size: 0.75rem;
		font-family: "Courier New", Courier, monospace;
	}
	& > button {
		width: 75%;
		margin: 3rem 12.5%;
		padding: 0.5rem 0;
		font-size: 1.5rem;
		font-weight: 600;
		border-radius: 5px;
		border: 1px solid #14e914;
		background: linear-gradient(270deg, #3bf83b 50%, #099409);
		color: var(--background);
		cursor: pointer;
		transition: all 0.3s;

		&:hover,
		&:active {
			background: linear-gradient(270deg, #099409, #3bf83b 50%);
			transform: scale(1.1);
		}
	}
`;
const SignIn = () => {
	// برای اعتبار سنجی
	const [Account, setAccount] = useState({
		email: "",
		password: "",
	});
	const [sending, setSending] = useState(false);
	const [Error, setError] = useState([]);
	// just for yup library
	const schema = yup.object().shape({
		email: yup
			.string()
			.required("لطفا ایمیل خود را وارد کنید")
			.email("ایمیل شما نادرست است"),
		password: yup
			.string()
			.required("لطفا رمز خود را وارد کنید")
			.min(5, "حداقل 5 کاراکتر انتخاب کنید"),
	});
	const validate = async () => {
		try {
			const result = schema.validate(Account, { abortEarly: false });
			return result;
		} catch (error) {
			setError([error]);
			console.log(error);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await validate();
		if (result) {
			try {
				setSending(true);
				const response = await axios.post(
					"https://reqres.in/api/login",
					result
				);
				localStorage.setItem("token", response.data.token);
				toast.success("شما با موفقیت وارد سایت شدید");
				setSending(false);
				window.location = "/";
			} catch (error) {
				setError(["ایمیل یا رمز شما اشتباه است"]);
				toast.error("شما وارد سایت نشدید");
				setSending(false);
			}
		}
		setAccount({
			email: "",
			password: "",
		});
	};
	function handleChange({ currentTarget: input }) {
		const account = { ...Account };
		account[input.name] = input.value;
		setAccount(account);
	}
	return (
		<>
			{Error.length !== 0 && <Toaster />}
			<Container ImgUrl='./../../assets/images/login.jpg'>
				<span></span>
				<Cart>
					<h1>ورود</h1>
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Input
							sub='ایمیل'
							name='email'
							type='email'
							value={Account.email}
							handleChange={handleChange}
							placeHolder='لطفا ایمیل خود را وارد کنید'
							className='fas fa-envelope'
						/>
						<Input
							sub='رمز'
							name='password'
							type='password'
							value={Account.password}
							handleChange={handleChange}
							placeHolder='لطفا رمز خود را وارد کنید'
							className='fas fa-lock'
						/>
						<span>رمز عبور خود را فراموش کرده اید ؟</span>
						<h4>ایمیل : eve.holt@reqres.in</h4>
						<h4>رمز : cityslicka</h4>
						<button disabled={sending}>ثبت</button>
					</Form>
					<Toaster />
				</Cart>
			</Container>
		</>
	);
};
export default SignIn;
