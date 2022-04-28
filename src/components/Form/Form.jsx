import { useContext, useState } from "react";
import {
	collection,
	doc,
	updateDoc,
	addDoc,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { context } from "../context/Context";
import { Link } from "react-router-dom";

const Form = () => {
	const { carrito, totalValue, clearAll } = useContext(context);
	const [state, setState] = useState(false);
	const [buyOrder, setBuyOrder] = useState("");
	const handleSumbit = (event) => {
		event.preventDefault();
		if (carrito.length > 0) {
			const comprador = {
				nombre: event.target.name.value,
				telefono: event.target.telefono.value,
				email: event.target.email.value,
			};
			const ventaCollection = collection(db, "ventas");
			addDoc(ventaCollection, {
				comprador,
				items: carrito.map(
					({ description, category, id, image, stock, ...rest }) => {
						return rest;
					}
				),
				date: serverTimestamp(),
				total: totalValue,
			}).then((res) => {
				setBuyOrder(res.id);
				setState(true);
				carrito.forEach((element) => {
					const updateCollection = doc(db, "productos", element.id);
					updateDoc(updateCollection, {
						stock: element.stock - element.quantity,
					});
				});
				clearAll();
			});
		} else {
			alert(
				"Debes agregar al menos un producto al carrito para poder continuar con la compra."
			);
		}
	};

	return (
		<div className="flex flex-auto flex-col items-center justify-center p-5 bg-white">
			{state === false ? (
				<form
					onSubmit={handleSumbit}
					className="flex flex-col gap-3 w-3/4 border-2 p-5"
				>
					<label htmlFor="name">Nombre:</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Escribe tu nombre aqui"
						required
					></input>
					<label htmlFor="telefono">Telefono:</label>
					<input
						type="number"
						id="telefono"
						name="telefono"
						placeholder="Escribe tu telefono aqui"
						required
					></input>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Escribe tu email aqui"
						required
					></input>
					<button
						type="sumbit"
						className="flex min-w-fit mx-auto my-5 border p-2 bg-violet-400"
					>
						COMPRAR
					</button>
				</form>
			) : (
				<>
					<div className="flex flex-col items-center p-2 border-2">
						<p className="flex text-xl">MUCHAS GRACIAS POR TU COMPRA.</p>
						<p className="flex">Este es el id de la orden: </p>
						<span className="text-2xl">{buyOrder}</span>
					</div>
					<Link to="/" className="flex text-2xl text-blue-300 underline">
						SEGUIR COMPRANDO.
					</Link>
				</>
			)}
		</div>
	);
};

export default Form;
