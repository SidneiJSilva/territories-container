import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	console.log("[ProtectedRoute] Verificando acesso...");

	const isAuthenticatedForSession =
		sessionStorage.getItem("isAuthenticatedForSession") === "true";

	if (isAuthenticatedForSession) {
		return <>{children}</>;
	}

	const hasAccessPass = sessionStorage.getItem("loginSuccessPass") === "true";

	if (hasAccessPass) {
		sessionStorage.removeItem("loginSuccessPass");
		sessionStorage.setItem("isAuthenticatedForSession", "true");

		return <>{children}</>;
	}

	return <Navigate to="/" replace />;
};

export default ProtectedRoute;
