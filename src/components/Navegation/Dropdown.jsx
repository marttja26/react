import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Dropdown = ({ categories }) => {
	const [menu, setMenu] = useState(false);
	const HandlerClick = () => {
		setMenu(!menu);
	};
	return (
		<div className="relative">
			<button onClick={HandlerClick}>
				CATEGORIAS <HiChevronDown className="inline-block" />
			</button>
			{menu === false ? null : (
				<ul className="absolute w-fit top-12 md:-left-2 md:border-2 md:bg-white">
					{categories.map((category, index) => {
						return (
							<li className="w-72 py-5 border-b md:pl-2 " key={index}>
								<NavLink
									className={(navData) =>
										navData.isActive ? "text-m" : "text-sm text-gray-400"
									}
									to={`category/${category.replace(/\s+/g, "_")}`}
								>
									{category.toUpperCase()}
								</NavLink>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
