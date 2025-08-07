import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById("territories-container")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
