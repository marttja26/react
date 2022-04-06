import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const url = `https://fakestoreapi.com/products/${id}`;
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setProduct(json);
			});
	}, [id]);

	return (
		<>
			{Object.keys(product).length !== 0 ? (
				<>
					<ItemDetail product={product} />
				</>
			) : (
				<div className="flex flex-auto items-center justify-center h-screen">
					<TailSpin height="150" width="150" color="grey" ariaLabel="loading" />
				</div>
			)}
		</>
	);
};

export default ItemDetailContainer;
