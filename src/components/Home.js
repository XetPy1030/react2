

export function Home({products, isFilled, cart, setCart, show_order_button}) {
    if (!isFilled) {
        return <div>Loading...</div>;
    }

    function order_product(product) {
        product.quantity = 1;
        setCart([...cart, product]);
    }

    function check_product(product) {
        return cart.find((item) => item.id === product.id && item.status === product.status && item.name === product.name);
    }

    return (
        <div className="home">
            <div className="home__products">
                {products.map((product) => (
                    <div className="home__product" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.status}</p>
                        {
                            show_order_button &&
                                (check_product(product) ?
                                    <button disabled>Added to cart</button> :
                                    <button onClick={() => order_product(product)}>Add to cart</button>)
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}