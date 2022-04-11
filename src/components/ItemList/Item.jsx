import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<div className="flex flex-col  max-w-xs border-2 bg-white" id={item.id}>
			<img src={item.image} className=" h-3/4 p-5" alt="product"></img>
			<div className="flex flex-col grow border-t">
				<div className="w-fit m-auto">
					<p className="text-center">{item.title}</p>
					<p className="text-center">${item.price}</p>
				</div>
				<Link to={`/item/${item.id}`} className="border-t-2 bg-gray-100">
					<button className="flex m-auto p-2">VER DETALLES</button>
				</Link>
			</div>
		</div>
	);
};

export default Item;
