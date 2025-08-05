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
				loginApp: {
					name: "loginApp",
					entry: "https://login-plum-chi.vercel.app/remoteEntry.js",
					type: "esm",
				},

				territoriesApp: {
					name: "territoriesApp",
					entry: "https://react-territories.vercel.app/remoteEntry.js",
					type: "esm",
				},
			},
			shared: ["react", "react-dom", "react-router-dom"],
		}),
	],
	server: {
		port: 5175,
	},
});
