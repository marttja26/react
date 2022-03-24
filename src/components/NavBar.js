import Links from "./Links";
import SideNav from "./SideNav";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<header className="flex py-5 bg-violet-400 sticky justify-around lg:justify-start">
			<>
				<SideNav />
				<Links className="hidden" />
				<h1 className="text-2xl lg:order-first lg:w-1/4 text-center">
					<a href="#">Tienda Virtual</a>
				</h1>
				<CartWidget />
			</>
		</header>
	);
};

export default NavBar;
