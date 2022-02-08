import { useEffect } from "react";
const LogOut = () => {
	useEffect(() => {
		localStorage.removeItem("token");
		window.location = "/home";
	});
	return null;
};
export default LogOut;
