import React, { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginApp = React.lazy(() => import("loginApp/App"));

const LoginWrapper = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			// Por segurança, verifique sempre a origem da mensagem
			if (event.origin !== "https://territories-container.vercel.app") {
				return;
			}

			// Verifique se a mensagem é a que esperamos
			if (event.data && event.data.type === "LOGIN_SUCCESS") {
				console.log(
					"[Container] Mensagem de sucesso recebida do loginApp. Navegando..."
				);
				// Use o navigate do *container* para uma transição suave
				navigate("/territories");
			}
		};

		// Adicione o "ouvinte" de mensagens
		window.addEventListener("message", handleMessage);

		// Limpe o "ouvinte" quando o componente for desmontado
		return () => {
			window.removeEventListener("message", handleMessage);
		};
	}, [navigate]); // Adicione navigate como dependência

	return (
		<Suspense fallback={<div>Carregando login...</div>}>
			<LoginApp />
		</Suspense>
	);
};

export default LoginWrapper;
