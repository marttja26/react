import "./App.css";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<>
			<Header />
			<ItemListContainer greeting="Bienvenido!" />
		</>
	);
}

export default App;
