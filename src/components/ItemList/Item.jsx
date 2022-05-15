import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<Link to={`/item/${item.id}`} className="">
			<div className="flex flex-col h-fit border-2 bg-white" id={item.id}>
				<img src={item.image} className="p-5" alt="product"></img>
				<div className="flex flex-col">
					<div className="w-fit m-auto">
						<p className="text-center text-sm text-gray-400 tracking-wider font-bold">
							{item.brand.toUpperCase()}
						</p>
						<p className="text-center">{item.title}</p>
						<p className="text-center font-bold">${item.price}</p>
					</div>
					<button className="flex m-auto p-2 font-bold hover:underline">
						VER DETALLES
					</button>
				</div>
			</div>
		</Link>
	);
};

export default Item;
