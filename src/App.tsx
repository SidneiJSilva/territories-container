import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginWrapper from "./pages/LoginWrapper";
import "./App.css"; // Importe o CSS

const MainLayout = () => (
	<div className="main-layout">
		{/* Aqui você renderizaria o seu territoriesApp no futuro */}
		<h1>Bem-vindo à Aplicação Principal</h1>
		<p>O conteúdo de territórios aparecerá aqui.</p>
	</div>
);

const LoginLayout = () => (
	<div className="login-layout">
		<LoginWrapper />
	</div>
);

const App = () => {
	return (
		<div className="app-container">
			<BrowserRouter>
				<Routes>
					<Route path="/login/*" element={<LoginLayout />} />
					<Route path="/territories" element={<MainLayout />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
