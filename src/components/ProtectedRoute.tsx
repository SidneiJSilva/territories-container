import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	console.log("[ProtectedRoute] Verificando acesso...");
	// CORREÇÃO: Lógica de autenticação de dois níveis

	// 1. Primeiro, verificamos se o utilizador já foi autenticado nesta sessão.
	const isAuthenticatedForSession =
		sessionStorage.getItem("isAuthenticatedForSession") === "true";

	if (isAuthenticatedForSession) {
		// Se sim, o acesso é permitido. Não é preciso fazer mais nada.
		return <>{children}</>;
	}

	// 2. Se não, verificamos se ele tem um "passe de acesso" de um login recente.
	const hasAccessPass = sessionStorage.getItem("loginSuccessPass") === "true";

	if (hasAccessPass) {
		// Se o passe existe, esta é a primeira entrada.
		// Removemos o passe de uso único...
		sessionStorage.removeItem("loginSuccessPass");
		// ...e criamos a flag de sessão persistente.
		sessionStorage.setItem("isAuthenticatedForSession", "true");

		// O acesso é permitido.
		return <>{children}</>;
	}

	// 3. Se nenhuma das condições for satisfeita, o acesso é negado.
	return <Navigate to="/" replace />;
};

export default ProtectedRoute;
