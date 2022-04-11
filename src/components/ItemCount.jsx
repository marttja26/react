import { useState } from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(stock > initial ? initial : stock);

	const incrementCount = () => {
		if (stock > count) {
			setCount((prevCount) => prevCount + 1);
		}
	};
	const decrementCount = () => {
		if (count > 0) {
			setCount((prevCount) => prevCount - 1);
		}
	};

	const AddToCart = () => {
		if (stock >= count && count > 0) {
			onAdd(count);
		}
	};

	return (
		<div className="flex flex-col gap-5 w-full">
			<p className="text-center"></p>
			<p className="text-center">STOCK: {stock}</p>
			<div className="flex max-w-fit border m-auto">
				<button className="bg-gray-200" onClick={decrementCount}>
					<HiOutlineMinusSm size="1.5rem" />
				</button>
				<div className="w-10 bg-white">
					<p className="text-center text-xl">{count}</p>
				</div>
				<button className="bg-gray-200" onClick={incrementCount}>
					<HiOutlinePlusSm size="1.5rem" />
				</button>
			</div>
			<button
				className="flex min-w-fit m-auto border p-2 bg-violet-400"
				onClick={AddToCart}
			>
				AGREGAR AL CARRITO
			</button>
		</div>
	);
};

export default ItemCount;
