import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	console.log(product);

	const getItem = () => {
		setTimeout(() => {
			fetch("https://fakestoreapi.com/products")
				.then((response) => response.json())
				.then((json) => {
					setProduct(json[0]);
				});
		}, 2000);
	};

	return (
		<div>
			<button
				onClick={getItem}
				className="flex p-2 m-auto border-2 border-black bg-violet-400"
			>
				VER DETALLES
			</button>
			{Object.keys(product).length !== 0 ? (
				<ItemDetail product={product} />
			) : (
				""
			)}
		</div>
	);
};

export default ItemDetailContainer;
