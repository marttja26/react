import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { db } from "../../firebase/firebase.js"
import { collection, getDocs } from 'firebase/firestore';

const Links = ({ className }) => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		const productsCollection = collection(db, 'productos')
		getDocs(productsCollection)
		.then((res) => {
			const docs = res.docs;
			const list = docs.map((product) => {
				const producto = product.data()
				return producto.category;
			})
			setCategories([...new Set(list)]);
		})
	}, []);
	return (
		<nav className={`lg:flex lg:flex-1 ${className}`}>
			<ul className="lg:flex">
				<li className="text-l p-5 lg:py-0">
					<NavLink to={"/"}>INICIO</NavLink>
				</li>
				<li className="text-l p-5 lg:py-0">
					<Dropdown categories={categories} />
				</li>
			</ul>
		</nav>
	);
};

export default Links;
