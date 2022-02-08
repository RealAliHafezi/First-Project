// libraries
import styled from "styled-components";
// styles
const Container = styled.div`
	width: 100%;
	margin: 0 auto 1rem;
	position: relative;
	& > label {
		font-size: 1.5rem;
		font-weight: 600;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		display: block;
		margin-bottom: 0.75rem;
		margin-right: 0.75rem;
	}
	& > input {
		width: 100%;
		padding: 0.5rem 2rem;
		font-size: 1.2rem;
		background-color: var(--background);
		color: rgba(0, 0, 0, 0.75);
		border: 1px solid rgba(0, 0, 0, 0.15);
		border-radius: 5px;
		&:focus {
			border: 1px solid rgba(0, 0, 0, 0.35);
			background-color: var(--white);
			color: var(--black);
		}
	}
	& > i {
		position: absolute;
		top: 53px;
		right: 10px;

		color: var(--black);
	}
`;
const Input = ({
	name,
	value,
	type,
	handleChange,
	sub,
	placeHolder,
	className,
}) => {
	return (
		<Container>
			<label htmlFor={name}>{sub}</label>
			<i className={className}></i>
			<input
				type={type}
				name={name}
				value={value}
				id={name}
				onChange={handleChange}
				placeholder={placeHolder}
			/>
		</Container>
	);
};
export default Input;
