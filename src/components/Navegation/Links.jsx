import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { db } from "../../firebase/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const Links = ({ className }) => {
	const [categories, setCategories] = useState([]);
	const [brands, setBrands] = useState([]);
	useEffect(() => {
		const productsCollection = collection(db, "productos");
		getDocs(productsCollection).then((res) => {
			const docs = res.docs;
			const listOfCategories = docs.map((product) => {
				const producto = product.data();
				return producto.category;
			});
			const listOfBrands = docs.map((product) => {
				const producto = product.data();
				return producto.brand;
			});
			setCategories([...new Set(listOfCategories)]);
			setBrands([...new Set(listOfBrands)]);
		});
	}, []);
	return (
		<nav className={`lg:flex lg:flex-1 ${className}`}>
			<ul className="lg:flex">
				<li className="text-l p-5 lg:py-0">
					<NavLink to={"/"}>INICIO</NavLink>
				</li>
				<li className="text-l p-5 lg:py-0">
					<Dropdown list={categories} type={"categorias"} />
				</li>
				<li className="text-l p-5 lg:py-0">
					<Dropdown list={brands} type={"marcas"} />
				</li>
			</ul>
		</nav>
	);
};

export default Links;
