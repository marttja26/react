import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Dropdown = ({ list, type }) => {
	const [menu, setMenu] = useState(false);
	const HandlerClick = () => {
		setMenu(!menu);
	};
	return (
		<div className="relative">
			<button onClick={HandlerClick}>
				{type.toUpperCase()} <HiChevronDown className="inline-block" />
			</button>
			{menu && (
				<ul className="absolute w-fit top-12 z-10 bg-white md:-left-2 md:border-2">
					{list.map((item, index) => {
						return (
							<li className="w-72 py-5 border-b md:pl-2 " key={index}>
								<NavLink
									className={(navData) =>
										navData.isActive ? "text-m" : "text-sm text-gray-400"
									}
									to={`${type}/${item}`}
								>
									{item.toUpperCase().replace(/_/g, " ")}
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
