import { useState } from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
// SOLUCION 1 APEGADA A LA CONSIGNA
/* const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial)

	const incrementCount = () => {
		if (stock > count) {
			setCount((prevCount) => prevCount + 1);
		}
	};
	const decrementCount = () => {
		if (count > 1) {
			setCount((prevCount) => prevCount - 1);
		}
	};

	const AddToCart = () => {
		if (stock >= count) {
			onAdd(count);
		}
	};

	return (
		<div className="flex flex-col gap-5 w-fit m-auto p-5 border rounded-md">
			<p className="text-center">Producto</p>
			<p className="text-center">STOCK: {stock}</p>
			<div className="flex max-w-fit border m-auto">
				<button className="bg-gray-200" onClick={decrementCount}>
					<HiOutlineMinusSm size="1.5rem" />
				</button>
				<div className="w-10 bg-white">
					<p className="text-center text-xl">
						{count}
					</p>
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
};  */

// SOLUCION 2 MAS FUNCIONAL?? :D
const ItemCount = ({ stock, initial = 1, onAdd }) => {
	const [count, setCount] = useState(initial);
	const [stockCount, setStockCount] = useState(stock);

	console.log(stockCount);
	console.log(count);

	const incrementCount = () => {
		if (stockCount > count) {
			setCount((prevCount) => prevCount + 1);
		}
	};
	const decrementCount = () => {
		if (count > 1) {
			setCount((prevCount) => prevCount - 1);
		}
	};

	const addToCart = () => {
		if (stockCount > 0) {
			setStockCount((prevStockCount) =>
				prevStockCount - count > 0 ? prevStockCount - count : 0
			);
			if (stockCount >= count) {
				onAdd(count);
			} else if (stockCount <= count && count > 0) {
				onAdd(stockCount);
			}
		}
	};

	return (
		<div className="flex flex-col gap-5 w-3/4 max-w-lg  m-auto p-5 border rounded-md">
			<p className="text-center">Producto</p>
			<p className="text-center">
				Stock disponible: {stockCount > 0 ? stockCount : 0}
			</p>
			<div className="flex max-w-fit border m-auto">
				<button className="bg-gray-200" onClick={decrementCount}>
					<HiOutlineMinusSm size="1.5rem" />
				</button>
				<div className="w-10 bg-white">
					<p className="text-center text-xl">
						{stockCount > count ? count : stockCount}
					</p>
				</div>
				<button className="bg-gray-200" onClick={incrementCount}>
					<HiOutlinePlusSm size="1.5rem" />
				</button>
			</div>
			<button
				className="flex min-w-fit m-auto border p-2 bg-violet-400"
				onClick={addToCart}
			>
				{stockCount > 0 ? "AGREGAR AL CARRITO" : "NO HAY STOCK"}
			</button>
		</div>
	);
};

export default ItemCount;
