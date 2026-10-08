/// <reference types="vite/client" />

declare module "loginApp/auth" {
	export function getToken(): Promise<string | null>;
}

declare module "territoriesApp/App" {
	import { ComponentType } from "react";

	type TerritoriesAppProps = {
		getToken: () => Promise<string | null>;
	};

	const App: ComponentType<TerritoriesAppProps>;

	export default App;
}
