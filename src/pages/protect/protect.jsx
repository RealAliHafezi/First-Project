import { Navigate, Outlet } from "react-router";
const Protect = ({ component: Component }) => {
	const Auth = localStorage.getItem("token");

	if (!Auth) return <Navigate to='/home' />;
	return <Outlet />;
};
export default Protect;
