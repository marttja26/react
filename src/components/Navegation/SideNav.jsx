import { useState } from "react";
import Links from "./Links";
import { HiOutlineX, HiOutlineViewList } from "react-icons/hi";

const SideNav = () => {
	const [toggle, setToggle] = useState(false);
	function toggler() {
		toggle ? setToggle(false) : setToggle(true);
	}
	return (
		<>
			<HiOutlineViewList
				onClick={toggler}
				size="2rem"
				className="hover:cursor-pointer lg:hidden"
			/>
			<div
				className={
					toggle
						? "fixed top-0 left-0 h-screen w-screen bg-white z-10"
						: "hidden"
				}
			>
				{toggle && (
					<HiOutlineX
						onClick={toggler}
						size="2rem"
						className="hover:cursor-pointer m-5"
					/>
				)}
				<Links />
			</div>
		</>
	);
};

export default SideNav;
