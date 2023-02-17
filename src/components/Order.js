export function Order({order}) {
    console.log(order)
    return (
        <div className="order">
            <div className="order__items">
                {order.map((item) => (
                    <div className="order__item" key={item.id}>
                        {item.cart.map((cart_item) => (
                            <div className="order__cart_item" key={cart_item.id}>
                                <h3>{cart_item.name}</h3>
                                <p>{cart_item.status}</p>
                                <p>{cart_item.quantity}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}