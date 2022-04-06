import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { categoryName } = useParams();
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((json) => {
				if (categoryName === undefined) {
					setProducts([...json]);
				} else {
					setProducts(
						json.filter((product) => {
							return product.category.replace(/\s+/g, "_") === categoryName;
						})
					);
				}
			});
	}, [categoryName]);

	const onAdd = (valor) => {
		console.log(
			`Has agregado ${valor} ${valor === 1 ? "producto" : "productos"}`
		);
	};
	return products.length !== 0 ? (
		<ItemList items={products} />
	) : (
		<div className="flex flex-auto items-center justify-center h-screen">
			<TailSpin height="150" width="150" color="grey" ariaLabel="loading" />
		</div>
	);
};
export default ItemListContainer;
