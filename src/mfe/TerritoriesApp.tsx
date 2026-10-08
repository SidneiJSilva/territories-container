import React from "react";
import { getToken } from "loginApp/auth";

const TerritoriesApp = React.lazy(() => import("territoriesApp/App"));

export default function TerritoriesPage() {
	return (
		<React.Suspense fallback={<div>Carregando territórios...</div>}>
			<TerritoriesApp getToken={getToken} />
		</React.Suspense>
	);
}
