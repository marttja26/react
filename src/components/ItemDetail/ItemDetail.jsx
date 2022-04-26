import { useContext } from "react";
import { context } from "../context/Context";
import ItemCount from "../ItemCount";

const ItemDetail = ({ product }) => {
	const { addItem } = useContext(context);
	const onAdd = (valor) => {
		addItem(product, valor);
	};
	return (
		<div className="flex flex-auto center">
			<div className="h-fit m-auto border-2 bg-white md:flex md:max-w-6xl md:min-h-[40rem]">
				<div className="flex p-5">
					<img
						src={product.image}
						className="h-fit m-auto md:max-w-sm"
						alt="product"
					></img>
				</div>
				<div className="flex flex-col self-center gap-5 px-5 py-10">
					<p className="text-xl">{product.title}</p>
					<p className="text-xl">$ {product.price}</p>
					<p>{product.description}</p>
					<ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
