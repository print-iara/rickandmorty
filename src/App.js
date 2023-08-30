/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Public/Footer";
import Header from "./Components/Public/Header";
import Main from "./Components/Public/Main";
import Main2 from "./Components/Public/Main2";
import Details from "./Components/Public/Details";
import UserForm from "./Components/Public/UserForm";

const App = () => {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<Main />} />
					<Route path="/Main2" element={<Main2 />} />
					<Route path="/details/:id" element={<Details />} />
					<Route path="/user-form" element={<UserForm />} />
				</Routes>
			</BrowserRouter>

			<section className="container">
				<Footer />
			</section>
		</div>
	);
};

export default App;
