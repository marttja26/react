import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
	const count = 5;
	return (
		<div className={"flex justify-end h-fit lg:flex-1"}>
			<HiShoppingCart size="2rem" />
			<p className="leading-8">{count > 0 ? count : ""}</p>
		</div>
	);
}

export default CartWidget;
