import Links from "./Links";
import SideNav from "./SideNav";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
const NavBar = () => {
	return (
		<header className="flex flex-initial p-5 sticky justify-between items-center bg-violet-400 lg:px-14">
			<>
				<SideNav />
				<Links className="hidden" />
				<h1 className="text-xl">
					<NavLink to="/">TIENDA VIRTUAL</NavLink>
				</h1>
				<CartWidget />
			</>
		</header>
	);
};

export default NavBar;
