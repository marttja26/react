import { useContext } from "react";
import { context } from "../context/Context";
import ItemCount from "../ItemCount";
import { HiStar } from "react-icons/hi";

const ItemDetail = ({ product }) => {
	const { addItem } = useContext(context);
	const { rate, count } = product.rating;
	const onAdd = (valor) => {
		//console.log(
		//	`Has agregado ${valor} ${valor === 1 ? "producto" : "productos"}`
		//);
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
					<div className="flex justify-between">
						<span>
							<HiStar className="inline" />
							{rate}
						</span>
						<p>{count} opiniones</p>
					</div>
					<p className="text-xl">$ {product.price}</p>
					<p>{product.description}</p>
					<ItemCount
						stock={
							5 /* Seria product.stock pero no tengo acceso a modificar la api, cuando creemos el json en firebase voy a agregarle esa propiedad */
						}
						initial={1}
						onAdd={onAdd}
					/>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
