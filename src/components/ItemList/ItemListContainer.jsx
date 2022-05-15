import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { db } from "../../firebase/firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { categoryName, brandName } = useParams();
	useEffect(() => {
		const productsCollection = collection(db, "productos");

		const byCategory = query(
			productsCollection,
			where("category", "==", `${categoryName}`)
		);

		const byBrand = query(
			productsCollection,
			where("brand", "==", `${brandName}`)
		);

		getDocs(
			categoryName ? byCategory : brandName ? byBrand : productsCollection
		).then((res) => {
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
	}, [categoryName, brandName]);

	return products.length !== 0 ? (
		<ItemList items={products} />
	) : (
		<div className="flex flex-auto items-center justify-center h-screen">
			<TailSpin height="150" width="150" color="grey" ariaLabel="loading" />
		</div>
	);
};
export default ItemListContainer;
