import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { VitePWA } from "vite-plugin-pwa";

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
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: "auto",
			workbox: {
				globPatterns: ["**/*.{js,css,html,ico,png,svg}"], // Define quais ficheiros serão guardados em cache
			},
			manifest: {
				name: "Territories PWA",
				short_name: "Territories",
				description: "A minha aplicação de gestão de territórios.",
				theme_color: "#242424",
				background_color: "#242424",
				display: "standalone",
				scope: "/",
				start_url: "/",
				icons: [
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
			},
		}),
	],
	server: {
		port: 5175,
	},
});
