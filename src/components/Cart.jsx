import {useNavigate} from "react-router-dom";

export function Cart({cart, setCart, orders, setOrders, currentUser}) {

  const navigate = useNavigate();

  const removeProductFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  }

  const updateProductQuantity = (product, quantity) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        // If the quantity is 0, remove the product from the cart
        if (item.quantity + quantity === 0) {
          return null;
        }
        return {
          ...item,
           quantity: item.quantity + quantity
        }
      }
      return item;
    });
    setCart(newCart.filter((item) => item !== null));
  }

  const cartList = cart.map((product) => {
    return (
      <li key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.strDrinkThumb} style={{width: '100px'}} />
        <p>Quantity: {product.quantity}</p>
        <button onClick={() => removeProductFromCart(product)}>Remove from cart</button>
        <button onClick={() => updateProductQuantity(product, 1)}>Add 1</button>
        <button onClick={() => updateProductQuantity(product, -1)}>Remove 1</button>
      </li>
    );
  });

  const total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

  const maxId = orders.reduce((acc, order) => {
    return Math.max(acc, order.id);
  }, 0);

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }
    const obj_cart = {
      id: maxId + 1,
      products: cart
    }
    setOrders([...orders, obj_cart]);
    setCart([]);
  }

  if (currentUser === null) {
    return (
      <main>
        <h1>Cart</h1>
        <p>Login to view your cart</p>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main>
        <h1>Cart</h1>
        <p>Your cart is empty</p>
      </main>
    );
  }

  const goHome = () => {
    navigate("/");
  }

  return (
    <main>
      <button onClick={goHome}>Назад</button>
      <h1>Cart</h1>
      <ul>
        {cartList}
      </ul>
      <p>Total: {total} рублей</p>
      <button onClick={checkout}>Make order</button>
    </main>
  );
}