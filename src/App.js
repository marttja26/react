import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
	return (
		<>
			<NavBar />
			<main className="h-screen">
			<ItemListContainer/>
			<ItemDetailContainer/>
			</main>
		</>
	);
};

export default App;
