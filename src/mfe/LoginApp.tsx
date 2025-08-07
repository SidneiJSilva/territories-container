import React from "react";

const LoginApp = React.lazy(() => import("loginApp/App"));

export default function LoginPage() {
	return (
		<React.Suspense fallback={<div>Carregando login...</div>}>
			<LoginApp />
		</React.Suspense>
	);
}
