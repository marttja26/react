import { HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
const CartProduct = ({ item, removeItem }) => {
	return (
		<div className="flex flex-col gap-5 items-center p-5 justify-evenly border lg:flex-row xl:w-4/5 xl:mx-auto">
			<div className="flex flex-col gap-5 items-center lg:gap-10 lg:flex-row">
				<img
					src={item.image}
					className="w-[200px] h-[200px] m-auto"
					alt=""
				></img>
				<Link to={`/item/${item.id}`}>
					<p className="lg:w-[20rem] text-center font-bold hover:underline">
						{item.title}
					</p>
				</Link>
				<p className="text-sm">Cantidad: {item.quantity}</p>
				<p className="text-sm">Precio: ${item.price}</p>

				<button onClick={() => removeItem(item.id)}>
					<HiTrash
						size="1.5em"
						className="hover:text-red-600 hover:scale-125 duration-200"
					/>
				</button>
				<p className="lg:w-[10rem]">
					Subtotal: $
					<span className=" font-bold">{item.price * item.quantity} </span>
				</p>
			</div>
		</div>
	);
};

export default CartProduct;
