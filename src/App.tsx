import { BrowserRouter, Route, Routes } from "react-router-dom";
import TerritoriesWrapper from "./pages/TerritoriesWrapper";
import LoginWrapper from "./pages/LoginWrapper";
import LoginRedirect from "./pages/LoginRedirect";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css"; // Importe o CSS

const MainLayout = () => (
	<div className="territories-layout">
		<TerritoriesWrapper />
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
					<Route
						path="/territories/*"
						element={
							<ProtectedRoute>
								<MainLayout />
							</ProtectedRoute>
						}
					/>
					<Route path="*" element={<LoginRedirect />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
