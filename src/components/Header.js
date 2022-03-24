import Nav from "./Nav";
import SideNav from "./SideNav";
import CartWidget from "./CartWidget";

const Header = () => {
	return (
		<header className="flex py-5 bg-violet-400 sticky justify-around">
			<>
				<SideNav />
				<Nav className="hidden md:flex " />
				<h1 className="text-2xl md:order-first">
					<a href="#">Tienda Virtual</a>
				</h1>
			</>
		</header>
	);
}

export default Header;
