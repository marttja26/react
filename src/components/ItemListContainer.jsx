import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
	const onAdd = (valor) => {
		console.log(
			`Has agregado ${valor} ${valor == 1 ? "producto" : "productos"}`
		);
	};
	return (
		<main className="h-screen">
			<div className="py-5">
				<p className="text-center text-xl">{greeting}</p>
			</div>
			<ItemCount stock={5} initial={2} onAdd={onAdd} />
			<ItemCount stock={5} onAdd={onAdd} /> {/* mejor manejado por la 2da solucion */}
			<ItemCount stock={0} initial={3} onAdd={onAdd}/> {/* mejor manejado por la 2da solucion */}
		</main>
	);
};
export default ItemListContainer;
