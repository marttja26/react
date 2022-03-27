import Links from "./Links";
import SideNav from "./SideNav";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<header className="flex p-5 sticky justify-between items-center bg-violet-400 lg:px-14">
			<>
				<SideNav />
				<Links className="hidden" />
				<h1 className="text-xl">
					<a href="#">TIENDA VIRTUAL</a>
				</h1>
				<CartWidget />
			</>
		</header>
	);
};

export default NavBar;
