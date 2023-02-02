import './App.css';
import {Route, Routes} from "react-router-dom";
import {NavBar} from "./NavBar";
import {Main} from "./components/Main";
import {Cart} from "./components/Cart";
import {useEffect, useState} from "react";
import {Orders} from "./components/Orders";
import {Login, Register} from "./components/UserMenu";


const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'Product 1 description'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    description: 'Product 2 description'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    description: 'Product 3 description'
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    description: 'Product 4 description'
  }
];


function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const [products, setProducts] = useState([]);

  const getDrinksRequest = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    getDrinksRequest().then(data => {
      data.drinks.forEach((item) => {
        item.id = item.idDrink;
        delete item.idDrink;
      });
      data.drinks.forEach((item) => {
        item.name = item.strDrink;
        delete item.strDrink;
      });
      setProducts(data.drinks);
    });
  }, []);

  function saveUser(user) {
    const newUsers = users.map((u) => {
      if (u.id === user.id) {
        u.cart = cart;
        u.orders = orders;
      }
      return u;
    });
    setUsers(newUsers);
  }

  // TODO: эффекты ошибок
  // TODO: проверка ошибок

  useEffect(() => {
    if (currentUser) {
      saveUser(currentUser);
    }
  }, [cart, orders])

  return (
    <div className="App" style={{
      'backgroundColor': 'white'
    }}>
      <NavBar
        cart={cart}
        setCart={setCart}
        orders={orders}
        setOrders={setOrders}
        users={users}
        setUsers={setUsers}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Routes>
        <Route path="/" element={<Main
          products={products}
          cart={cart}
          setCart={setCart}
          currentUser={currentUser}
          saveUser={saveUser}
        />} />
        <Route path="/cart" element={<Cart
          cart={cart}
          setCart={setCart}
          orders={orders}
          setOrders={setOrders}
          currentUser={currentUser}
          saveUser={saveUser}
        />} />
        <Route path="/orders" element={<Orders
          orders={orders}
          currentUser={currentUser}
          saveUser={saveUser}
        />} />
        <Route path="/login" element={<Login
          users={users}
          setUsers={setUsers}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setCart={setCart}
          setOrders={setOrders}
        />} />
        <Route path="/register" element={<Register
          users={users}
          setUsers={setUsers}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
