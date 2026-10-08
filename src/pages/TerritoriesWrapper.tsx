// territories-container/src/pages/TerritoriesWrapper.tsx
import React, { Suspense } from "react";
import { getToken } from "loginApp/auth";

const TerritoriesApp = React.lazy(() => import("territoriesApp/App"));

const TerritoriesWrapper = () => {
	return (
		<Suspense fallback={<div>Carregando territórios...</div>}>
			<TerritoriesApp getToken={getToken} />
		</Suspense>
	);
};

export default TerritoriesWrapper;
