import { useState, createContext } from "react";

export const context = createContext();
const { Provider } = context;

const CustomProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);

    const sumOfProducts = carrito.reduce((accumulator, element) => {
        return accumulator + element.quantity;
    }, 0);

	const isInCart = (id) => {
		return carrito.some((element) => element.id === id);
	};
	const addItem = (item, quantity) => {
		console.log(carrito);
		if (isInCart(item.id)) {
			let products = [...carrito];
			const index = carrito.findIndex((element) => element.id === item.id);
			products[index].quantity = products[index].quantity + quantity;
			setCarrito(products);
		} else {
			setCarrito([...carrito, {...item, quantity }]);
		}
	};
	const removeItem = (id) => {
		setCarrito(carrito.filter((element) => element.id !== id))
	};
	const clearAll = () => {
		setCarrito([])
	};

	return (
		<Provider value={{carrito, sumOfProducts, addItem, removeItem, clearAll }}>
			{children}
		</Provider>
	);
};

export default CustomProvider;
