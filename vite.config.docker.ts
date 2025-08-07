import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "container",
			remotes: {
				loginApp: {
					name: "loginApp",
					entry: "http://localhost:4173/remoteEntry.js",
					type: "esm",
				},
				territoriesApp: {
					name: "territoriesApp",
					entry: "http://localhost:4174/remoteEntry.js",
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
