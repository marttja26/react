import Nav from "./Nav";
import SideNav from "./SideNav";
import CartWidget from "./CartWidget";

function Header() {
	return (
		<header className="flex py-5 bg-violet-400 sticky justify-around">
			<>
			<SideNav/>
			<Nav className="hidden md:block "/>
			<h1 className="text-2xl md:order-first"><a href="#">Tienda Virtual</a></h1>
			<CartWidget/>
			</>
		</header>
	);
}

export default Header;
