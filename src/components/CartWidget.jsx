import { useContext } from "react";
import { context } from "./context/Context";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
const CartWidget = () => {
	const { sumOfProducts } = useContext(context);

	return (
		<div className={"flex justify-end h-fit lg:flex-1"}>
			<Link to="/cart">
				<HiShoppingCart size="2rem" />
			</Link>
			<p className="leading-8">{sumOfProducts > 0 ? sumOfProducts : ""}</p>
		</div>
	);
};

export default CartWidget;
