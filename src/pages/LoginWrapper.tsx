import React, { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginApp = React.lazy(() => import("loginApp/App"));

const LoginWrapper = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			if (event.origin !== "https://territories-container.vercel.app") {
				return;
			}

			if (event.data && event.data.type === "LOGIN_SUCCESS") {
				console.log(
					"[Container] Mensagem de sucesso recebida do loginApp. Navegando..."
				);
				navigate("/territories");
			}
		};

		window.addEventListener("message", handleMessage);

		return () => {
			window.removeEventListener("message", handleMessage);
		};
	}, [navigate]);

	return (
		<Suspense fallback={<div>Carregando login...</div>}>
			<LoginApp />
		</Suspense>
	);
};

export default LoginWrapper;
