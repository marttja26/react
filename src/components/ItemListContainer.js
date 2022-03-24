const ItemListContainer = ({ greeting }) => {
	return (
		<main className="h-screen">
			<div className="py-5">
				<p className="text-center text-xl">{greeting}</p>
			</div>
		</main>
	);
}
export default ItemListContainer;
