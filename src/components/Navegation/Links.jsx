import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Links = ({ className }) => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((json) => setCategories([...json]));
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
