import React, { Suspense } from "react";

const LoginApp = React.lazy(() => import("loginApp/App"));

const LoginWrapper = () => {
	return (
		<Suspense fallback={<div>Carregando login...</div>}>
			<LoginApp />
		</Suspense>
	);
};

export default LoginWrapper;
