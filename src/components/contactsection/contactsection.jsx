// libraries
import styled from "styled-components";
// components
import HomeTitle from "../titles/homeTitle/title";
// images
import Phone from "./../../assets/images/phone.png";
// styles
const Container = styled.div`
	display: flex;
	justify-content: right;
	flex-direction: column;
	position: relative;

	margin: 2rem 0;
	padding: 4rem 2rem 2rem 2rem;
	width: 100%;
	height: auto;

	@media only screen and (max-width: 882px) {
	}

	@media only screen and (max-width: 548px) {
		padding: 2rem 0;
	}
`;
const Top = styled.div`
	display: flex;
	justify-content: right;
	position: relative;

	@media only screen and (max-width: 882px) {
		flex-direction: column;
	}
`;
const Right = styled.div`
	height: 100%;
	width: calc(60% - 2rem);
	display: flex;
	flex-direction: column;
	z-index: 1;
	& > div {
		width: 70%;
		margin: 1rem 0;
		padding-right: 2rem;
	}
	& > div > label {
		margin-right: 0.5rem;
		font-size: 1.1rem;
		font-weight: 600;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		& > i {
			margin-left: 0.5rem;
		}
	}
	& > div > input {
		width: 100%;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		margin-top: 0.5rem;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		background-color: rgb(243, 243, 243);
		&:active,
		&:focus {
			border-color: rgba(0, 0, 0, 0.3);
			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
			background-color: var(--white);
		}
	}

	@media only screen and (max-width: 882px) {
		width: calc(100% - 2rem);
		& > div {
			width: 75%;
			margin: 1rem auto;
		}
	}

	@media only screen and (max-width: 548px) {
		width: calc(100% - 2rem);
		justify-content: center;
		& > div {
			width: 100%;
			margin: 1rem auto;
		}
	}
`;
const Left = styled.div`
	width: calc(40% - 2rem);

	z-index: 1;

	& > div {
		width: 100%;
		margin: 1rem auto;
		display: flex;
		flex-direction: column;
	}
	& > div > label {
		margin-right: 0.5rem;
		font-size: 1.1rem;
		font-weight: 600;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		& > i {
			margin-left: 0.5rem;
		}
	}
	& > div > textarea {
		width: 100%;
		height: 100%;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		margin-top: 0.5rem;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		background-color: rgb(243, 243, 243);
		&:active,
		&:focus {
			border-color: rgba(0, 0, 0, 0.3);
			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
			background-color: var(--white);
		}
	}

	@media only screen and (max-width: 882px) {
		width: calc(100% - 2rem);
		justify-content: center;
		& > div {
			width: 75%;
			padding: 0 7.5% 0 0;
			margin: 1rem auto;
		}
	}

	@media only screen and (max-width: 548px) {
		width: calc(100% - 2rem);
		justify-content: center;
		& > div {
			width: 90%;
			padding: 0 7.5% 0 0;
			margin: 1rem auto;
		}
	}
`;
const Btn = styled.div`
	width: 20%;
	margin: 1.5rem auto 0 4rem;
	& > button {
		width: 100%;
		padding: 0.5rem 0;
		font-size: 1.5rem;
		font-weight: 600;
		font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
		border-radius: 20px;
		color: var(--white);
		background-color: var(--green);
		cursor: pointer;
		transition: all 0.3s;
		&:active,
		&:hover {
			background-color: green;
			transform: scale(1.1);
		}
	}
	@media only screen and (max-width: 768px) {
		width: 30%;
	}
	@media only screen and (max-width: 548px) {
		width: 75%;
		margin: 1rem auto 0;
	}
`;
const ContactSection = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<HomeTitle idName={"contact"} text={"ارتباط با ما"} address={"contact"} />
			<Container>
				<Top>
					<Right>
						<div>
							<label htmlFor='username'>
								<i className='fas fa-user'></i>نام کاربری
							</label>
							<input
								type='text'
								id='username'
								placeholder='نام خود را بصورت لاتین وارد کنید'
							/>
						</div>
						<div>
							<label htmlFor='email'>
								<i className='fas fa-envelope'></i>پست الکترونیک
							</label>
							<input type='text' id='emil' placeholder='name@example.com' />
						</div>
						<div>
							<label htmlFor='phone'>
								<i className='fas fa-phone'></i>شماره همراه
							</label>
							<input type='text' id='phone' placeholder='09121212120' />
						</div>
					</Right>
					<Left>
						<div>
							<label htmlFor='desc'>
								<i className='fas fa-comment'></i>
								نظر
							</label>
							<textarea
								id='desc'
								rows='12'
								placeholder='نظر خود را وارد کنید'></textarea>
						</div>
					</Left>
				</Top>
				<Btn>
					<button
						type='submit'
						onClick={(e) => {
							handleSubmit(e);
						}}>
						ثبت
					</button>
				</Btn>
			</Container>
		</>
	);
};
export default ContactSection;
