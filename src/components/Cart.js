import {useNavigate} from "react-router-dom";

export function Cart({cart, setCart, order, setOrder}) {
    const navigate = useNavigate();

    function remove_item(item) {
        setCart(cart.filter((cart_item) => cart_item.id !== item.id));
    }

    function order_items() {
        setOrder([...order, {cart: cart}]);
        setCart([]);
        navigate("/order");
    }

    function change_quantity(item, value) {
        const new_cart = cart.map((cart_item) => {
            if (cart_item.id === item.id) {
                if (cart_item.quantity + value < 1) {
                    return cart_item;
                }
                cart_item.quantity += value;
            }
            return cart_item;
        });
        setCart(new_cart);
    }

    return (
        <div className="cart">
            <div className="cart__items">
                {cart.map((item) => (
                    <div className="cart__item" key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.status}</p>
                        <p>{item.quantity}</p>
                        <button onClick={() => change_quantity(item, 1)}>+</button>
                        <button onClick={() => change_quantity(item, -1)}>-</button>
                        <button onClick={() => remove_item(item)}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="cart__order">
                <button onClick={order_items}>Order</button>
            </div>
        </div>
    );
}