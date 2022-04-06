import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
const CartWidget = () => {
	const count = 5;
	return (
		<div className={"flex justify-end h-fit lg:flex-1"}>
			<Link to="/cart">
				<HiShoppingCart size="2rem" />
			</Link>
			<p className="leading-8">{count > 0 ? count : ""}</p>
		</div>
	);
};

export default CartWidget;
