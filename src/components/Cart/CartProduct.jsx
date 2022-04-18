import { HiTrash } from "react-icons/hi";

const CartProduct = ({ item, removeItem }) => {
	return (
		<div className="flex flex-col gap-5 items-center justify-between p-5  border lg:flex-row xl:w-4/5 xl:mx-auto">
			<div className="flex flex-wrap gap-5 items-center lg:gap-10">
				<img
					src={item.image}
					className="w-[100px] h-[100px] m-auto"
					alt=""
				></img>
				<p className="lg:w-96">{item.title}</p>
				<p>CANTIDAD: {item.quantity}</p>
				<p>PRECIO: ${item.price}</p>
			</div>
			<button onClick={() => removeItem(item.id)}>
				<HiTrash size="1.5em" />
			</button>
			<p>TOTAL: ${item.price * item.quantity}</p>
		</div>
	);
};

export default CartProduct;
