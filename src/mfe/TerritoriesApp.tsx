import React from "react";

const TerritoriesApp = React.lazy(() => import("territoriesApp/App"));

export default function TerritoriesPage() {
	return (
		<React.Suspense fallback={<div>Carregando territórios...</div>}>
			<TerritoriesApp />
		</React.Suspense>
	);
}
