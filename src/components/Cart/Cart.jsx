import { useContext } from "react";
import { context } from "../context/Context";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
const Cart = () => {
	const { carrito, removeItem, clearAll } = useContext(context);
	console.log(carrito);
	return (
		<div className="flex flex-auto flex-col p-5 bg-white">
			{carrito.map((item) => (
				<CartProduct item={item} key={item.id} removeItem={removeItem} />
			))}
			{carrito.length > 0 ? (
				<button
					className="flex min-w-fit mx-auto my-5 border p-2 bg-violet-400"
					onClick={clearAll}
				>
					VACIAR EL CARRITO
				</button>
			) : (
				<div className="flex flex-col items-center m-auto">
					<p className="flex text-2xl">EL CARRITO ESTA VACIO.</p>
					<Link to="/" className="flex text-2xl text-blue-300 underline">
						VOLVER A LA PAGINA PRINCIPAL.
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
