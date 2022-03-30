import Item from "./Item";

const ItemList = ({items}) => {
    
	return (
		<div className="flex flex-wrap gap-5 w-4/5 max-w-7xl justify-center m-auto p-5">
        {
            items.map(item => <Item item={item} key={item.id}/>)
        }
		</div>
	);
};

export default ItemList;
