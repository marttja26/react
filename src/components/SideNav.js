import { useState } from "react";
import Nav from "./Nav";
import { HiOutlineX, HiOutlineViewList } from "react-icons/hi";

function SideNav() {
	const [toggle, setToggle] = useState(false);
	function toggler() {
		toggle ? setToggle(false) : setToggle(true);
	}
	return (
		<>
			<HiOutlineViewList
				onClick={toggler}
				size="2rem"
				className="hover:cursor-pointer md:hidden"
			/>
			<div className={toggle ? "absolute top-0 left-0 h-screen w-screen bg-white z-10" : "hidden"}>
                {toggle ? <HiOutlineX
				onClick={toggler}
				size="2rem"
				className="hover:cursor-pointer m-5"
			/> : null}
				<Nav/>
			</div>
		</>
	);
}

export default SideNav;
