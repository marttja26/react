import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { db } from "../../firebase/firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { categoryName } = useParams();
	useEffect(() => {
		const productsCollection = collection(db, "productos");

		const q = query(
			productsCollection,
			where("category", "==", `${categoryName}`)
		);

		getDocs(categoryName ? q : productsCollection).then((res) => {
			const docs = res.docs;
			const list = docs.map((product) => {
				const id = product.id;
				const producto = {
					id,
					...product.data(),
				};
				return producto;
			});
			setProducts(list);
		});
	}, [categoryName]);

	return products.length !== 0 ? (
		<ItemList items={products} />
	) : (
		<div className="flex flex-auto items-center justify-center h-screen">
			<TailSpin height="150" width="150" color="grey" ariaLabel="loading" />
		</div>
	);
};
export default ItemListContainer;
