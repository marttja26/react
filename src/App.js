import "./App.css";
import CustomProvider from "./components/context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navegation/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";
import ErrorPage from "./components/ErrorPage";
const App = () => {
	return (
		<BrowserRouter>
			<CustomProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route
						path="/category/:categoryName"
						element={<ItemListContainer />}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/form" element={<Form />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</CustomProvider>
		</BrowserRouter>
	);
};

export default App;
