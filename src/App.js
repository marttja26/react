import "./App.css";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
	return (
		<>
			<Header />
			<ItemListContainer greeting="hola bienvenido" />
		</>
	);
};

export default App;
