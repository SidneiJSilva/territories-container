import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginRedirect = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Em uma aplicação real, estes valores viriam de um ficheiro de configuração,
		// do estado da aplicação, ou de uma chamada de API.
		// Para este exemplo, vamos usar os valores que você forneceu.
		const callBackUrl = "99a4b5e6-9746-4416-8c10-fc6e2afda3c6";
		const appId = "98fcd818-0408-488e-81cc-022377aa5d07";

		// Constrói o caminho completo com os parâmetros
		const pathToLogin = `/login?callBackUrl=${callBackUrl}&appId=${appId}`;

		// Executa a navegação e substitui a entrada no histórico do browser.
		// 'replace: true' evita que o utilizador fique preso num loop de
		// redirecionamento se clicar no botão "Voltar".
		navigate(pathToLogin, { replace: true });
	}, [navigate]); // O useEffect depende do hook navigate

	// O componente não renderiza nada visível, pois o redirecionamento é imediato.
	return null;
};

export default LoginRedirect;
