import { HiShoppingCart } from "react-icons/hi";

function CartWidget() {
    const count = 1
    return(
        <div className="flex">
            <HiShoppingCart size="2rem"/>
            <span>{count > 0 ? count : ""}</span>
        </div>
    )
}

export default CartWidget;
