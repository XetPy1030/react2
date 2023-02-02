import {Link, Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Button, Form, Input} from "antd";

export function UserMenu({users, setUsers, currentUser, setCurrentUser}) {
  function logout() {
    setCurrentUser(null);
  }

  return (
    <div>
      {currentUser ? (
        <div>
          <p>{currentUser.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>Login</Link>|
          <Link to={"/register"}>Register</Link>
        </div>
      )}
    </div>
  );
}

export function Login({users, setUsers, setCurrentUser, currentUser, setCart, setOrders}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (email === "") {
      alert("Name is empty");
      return;
    }
    if (password === "") {
      alert("Password is empty");
      return;
    }
    if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      alert("Invalid email");
      return;
    }

    const user = users.find((user) => user.name === email && user.password === password);
    if (user) {
      setCurrentUser(user);
      setCart(user.cart);
      setOrders(user.orders);
    } else {
      alert("User not found");
    }
  }

  if (currentUser) {
    return (
      <Navigate to={"/"} />
    )
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
      <button onClick={login}>Login</button>
    </div>
  );
}

export function Register({users, setUsers, setCurrentUser, currentUser}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function register(event) {
    if (name === "") {
      alert("Name is empty");
      return;
    }
    if (password === "") {
      alert("Password is empty");
      return;
    }
    if (!name.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      alert("Invalid email");
      return;
    }

    const user = users.find((user) => user.name === name);
    if (user) {
      alert("User already exists");
    } else {
      const newUser = {
        id: users.length + 1,
        name,
        password,
        cart: [],
        orders: []
      };
      setUsers([...users, newUser]);
      navigate("/login");
    }
  }

  return (
    <div>
      {
        currentUser ? (
          <div>
            <Navigate to={"/"} />
          </div>
        ) : (
          <div>
            <h1>Register</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Email"/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button onClick={register}>Register</button>
          </div>
        )
      }
    </div>
  );
}