import Item from "./Item";
import { HiStar } from "react-icons/hi";

const ItemDetail = ({ product }) => {
	const { rate, count } = product.rating;

	return (
		<div className="p-5 max-w-6xl border m-auto my-5 md:flex">
			<div>
				<img src={product.image} className="p-5 md:max-w-sm"></img>
			</div>
			<div className="flex flex-col gap-2 justify-center">
				<p className="text-xl">{product.title}</p>
				<div className="flex justify-between">
					<span>
						<HiStar className="inline" />
						{rate}
					</span>
					<p>{count} opiniones</p>
				</div>
				<p className="text-xl">$ {product.price}</p>
				<p>{product.description}</p>
				<button className="flex mx-auto p-2 border-2 border-black bg-violet-400">
					COMPRAR
				</button>
			</div>
		</div>
	);
};

export default ItemDetail;
