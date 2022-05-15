import { useState, createContext } from "react";

export const context = createContext();
const { Provider } = context;

const CustomProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);

	const sumOfProducts = carrito.reduce((accumulator, element) => {
		return accumulator + element.quantity;
	}, 0);

	const totalValue = carrito.reduce((accumulator, element) => {
		return accumulator + element.quantity * element.price;
	}, 0);

	const isInCart = (id) => {
		return carrito.some((element) => element.id === id);
	};

	const getProductStock = (id) => {
		if (isInCart(id)) {
			const product = carrito.find((element) => element.id === id);
			return product.stock - product.quantity;
		}
	};

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			const products = [...carrito];
			const index = carrito.findIndex((element) => element.id === item.id);
			products[index].quantity += quantity;
			setCarrito(products);
		} else {
			setCarrito([...carrito, { ...item, quantity }]);
		}
	};
	const removeItem = (id) => {
		setCarrito(carrito.filter((element) => element.id !== id));
	};
	const clearAll = () => {
		setCarrito([]);
	};

	return (
		<Provider
			value={{
				carrito,
				sumOfProducts,
				totalValue,
				getProductStock,
				addItem,
				removeItem,
				clearAll,
			}}
		>
			{children}
		</Provider>
	);
};

export default CustomProvider;
