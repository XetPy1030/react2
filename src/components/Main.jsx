


export function Main({products, cart, setCart, currentUser}) {
  function isProductInCart(product) {
    return cart.some((cartProduct) => cartProduct.id === product.id);
  }

  function addProductToCart(product, event) {
    event.target.parentNode.classList.add("hide");
    event.target.parentNode.classList.add("hide_animation");
    product = {
      ...product,
      quantity: 1
    }
    setCart([...cart, product]);
  }

  const productsList = products.map((product) => {
    return (
      <li key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price} рублей</p>
        {
          currentUser ? (
            !isProductInCart(product) ? (
              <button onClick={(event) => addProductToCart(product, event)}>Add to cart</button>
            ) : (
              <button disabled>Added to cart</button>
            )
          ) : (
            <button disabled>Login to add to cart</button>
          )
        }
      </li>
    );
  });

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {productsList}
      </ul>
    </main>
  );
}