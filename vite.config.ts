import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "container",
			remotes: {
				// CORREÇÃO: Usar 'esm@' e o caminho raiz (sem /assets/)
				loginApp: {
					name: "loginApp",
					entry: "http://localhost:4173/remoteEntry.js",
					type: "esm",
				},

				// Lembre-se de fazer o mesmo para a sua outra app
				// territoriesApp: "esm@http://localhost:4174/remoteEntry.js",
			},
			shared: ["react", "react-dom", "react-router-dom"],
		}),
	],
	server: {
		port: 5175,
	},
});
