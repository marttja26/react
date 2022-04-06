import { HiStar } from "react-icons/hi";

const ItemDetail = ({ product }) => {
	const { rate, count } = product.rating;

	return (
		<div className="flex flex-auto">
			<div className="h-fit m-auto border md:flex md:max-w-6xl md:min-h-[40rem]">
				<div className="flex p-5">
					<img
						src={product.image}
						className="h-fit m-auto md:max-w-sm"
						alt="product"
					></img>
				</div>
				<div className="flex flex-col gap-5 p-5 justify-center">
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
		</div>
	);
};

export default ItemDetail;
