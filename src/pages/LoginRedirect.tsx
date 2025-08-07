import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginRedirect = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const callBackUrl = "99a4b5e6-9746-4416-8c10-fc6e2afda3c6";
		const appId = "98fcd818-0408-488e-81cc-022377aa5d07";
		const callBackOrigin = "b00d1c4f-fbf6-434d-8f84-a3a175d303f2";

		const pathToLogin = `/login?callBackUrl=${callBackUrl}&appId=${appId}&callBackOrigin=${callBackOrigin}`;

		navigate(pathToLogin, { replace: true });
	}, [navigate]);

	return null;
};

export default LoginRedirect;
