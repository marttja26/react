import { useContext } from "react";
import { context } from "../context/Context";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
const Cart = () => {
	const { carrito, totalValue, removeItem, clearAll } = useContext(context);
	return (
		<div className="flex flex-auto flex-col p-5 bg-white">
			{carrito.map((item) => (
				<CartProduct item={item} key={item.id} removeItem={removeItem} />
			))}

			{carrito.length > 0 ? (
				<div className="flex flex-col justify-center w-4/5 mx-auto md:justify-between md:flex-row">
					<button className="btn-del" onClick={clearAll}>
						VACIAR EL CARRITO
					</button>
					<div className="flex flex-col my-5 p-5 border-2">
						<p className="flex m-auto text-xl">TOTAL: ${totalValue}</p>
						<Link to={"/form"} className="btn">
							FINALIZAR COMPRA
						</Link>
					</div>
				</div>
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
