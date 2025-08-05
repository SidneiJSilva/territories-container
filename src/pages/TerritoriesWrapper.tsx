// territories-container/src/pages/TerritoriesWrapper.tsx
import React, { Suspense } from "react";

const TerritoriesApp = React.lazy(() => import("territoriesApp/App"));

const TerritoriesWrapper = () => {
	return (
		<Suspense fallback={<div>Carregando territórios...</div>}>
			<TerritoriesApp />
		</Suspense>
	);
};

export default TerritoriesWrapper;
