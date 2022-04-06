import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<div className="flex flex-col  max-w-xs border" id={item.id}>
			<img src={item.image} className=" h-3/4 p-5" alt="product"></img>
			<div className="flex grow bg-gray-200">
				<div className="w-fit m-auto">
					<p className="text-center">{item.title}</p>
					<p className="text-center">${item.price}</p>
					<Link to={`/item/${item.id}`}>
						<button className="flex p-2 m-auto border-2 border-black bg-violet-400">
							VER DETALLES
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Item;
