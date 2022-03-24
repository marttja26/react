import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
	const count = 5;
	return (
		<div className={"flex justify-center lg:w-1/4"}>
			<HiShoppingCart size="2rem" />
			<span>{count > 0 ? count : ""}</span>
		</div>
	);
}

export default CartWidget;
