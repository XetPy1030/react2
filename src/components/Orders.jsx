import {useNavigate} from "react-router-dom";

export function Orders({orders, currentUser}) {
  const navigate = useNavigate();

  const ordersList = orders.map((order) => {
    const productsList = order.products.map((product) => {
      return (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price} рублей</p>
          <p>Quantity: {product.quantity}</p>
        </li>
      );
    });
    return (
      <li key={order.id}>
        <h2>Order #{order.id}</h2>
        <ul>
          {productsList}
        </ul>
      </li>
    );
  });

  const total = orders.reduce((acc, order) => {
    return acc + order.products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  }, 0);

  if (currentUser === null) {
    return (
      <main>
        <h1>Orders</h1>
        <p>Login to view your orders</p>
      </main>
    );
  }

  const goHome = () => {
    navigate("/");
  }

  return (
    <main>
      <button onClick={goHome}>Назад</button>
      <h1>Orders</h1>
      <ul>
        {ordersList}
      </ul>
      <p>Total: {total} рублей</p>
    </main>
  );
}