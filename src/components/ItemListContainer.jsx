import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			fetch("https://fakestoreapi.com/products")
				.then((response) => response.json())
				.then((json) => {
					setProducts([...json]);
				});
		}, 2000);
	}, []);

	const onAdd = (valor) => {
		console.log(
			`Has agregado ${valor} ${valor == 1 ? "producto" : "productos"}`
		);
	};
	return <ItemList items={products} />;
};
export default ItemListContainer;
