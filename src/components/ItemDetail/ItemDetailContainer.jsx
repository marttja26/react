import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { db } from "../../firebase/firebase.js";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const productsCollection = collection(db, "productos");
		const refDoc = doc(productsCollection, id);
		getDoc(refDoc)
			.then((result) => {
				const id = result.id;
				const item = { id, ...result.data() };
				setProduct(item);
			})
			.catch((error) => {
				console.log(error);
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
