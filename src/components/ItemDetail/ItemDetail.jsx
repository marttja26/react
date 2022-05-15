import { useContext } from "react";
import { context } from "../context/Context";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
	const { addItem, getProductStock } = useContext(context);
	const onAdd = (valor) => {
		addItem(product, valor);
	};
	return (
		<div className="flex flex-col flex-auto center bg-white">
			<div className="h-fit m-auto md:flex md:max-w-6xl md:min-h-[40rem]">
				<div className="flex p-5">
					<img
						src={product.image}
						className="h-fit m-auto md:max-w-sm"
						alt="product"
					></img>
				</div>
				<div className="flex flex-col self-center gap-5 px-5 py-10 md:lg:border-l-2">
					<p className="text-xl font-bold">{product.title}</p>
					<p className="text-sm">
						Categoria: {product.category.replace(/_/g, " ")}
					</p>
					<p className="text-sm">Marca: {product.brand.replace("_", " ")}</p>
					<p className="text-xl font-bold">$ {product.price}</p>
					<ItemCount
						stock={getProductStock(product.id) ?? product.stock}
						initial={1}
						onAdd={onAdd}
					/>
				</div>
			</div>
			<div className="h-fit m-auto p-2 flex-col md:flex md:max-w-6xl md:min-h-[40rem]">
				<p className="texl-xl font-bold">DESCRIPCIÓN</p>
				<p className="text-sm text-gray-400">{product.description}</p>
			</div>
		</div>
	);
};

export default ItemDetail;
