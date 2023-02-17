import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useFetch} from "../api/hook";
import {Home} from "./Home";
import {Cart} from "./Cart";
import {Order} from "./Order";
import {Login, Register} from "./Registrations";
import {Logout} from "./Logout";

export const PageRouting = () => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);
    const {data, isPending, error} = useFetch({url: "https://petstore.swagger.io/v2/pet/findByStatus?status=available"});
    const [isFilled, setIsFilled] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);

    function make_unique_items(items) {
        const unique_items = [];
        items.forEach((item) => {
            if (unique_items.find((unique_item) => unique_item.id === item.id && unique_item.status === item.status && unique_item.name === item.name)) {
                return;
            }
            if (unique_items.find((unique_item) => unique_item.id === item.id)) {
                return;
            }
            unique_items.push(item);
        });
        return unique_items;
    }

    if (!isPending && !isFilled) {
        setIsFilled(true);
        const new_products = make_unique_items(data);
        setProducts(new_products);
    }



    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {
                        !currentUser ?
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <Link to="/cart">Cart({cart.length})</Link>
                                </li>
                                <li>
                                    <Link to="/order">Order({order.length})</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </>
                    }
                </ul>
                <Routes>
                    <Route path="/" element={
                        <Home
                            products={products}
                            cart={cart}
                            setCart={setCart}
                            isFilled={isFilled}
                            show_order_button={currentUser}
                        />
                    } />
                    <Route path="/cart" element={
                        <Cart
                            cart={cart}
                            setCart={setCart}
                            order={order}
                            setOrder={setOrder}
                        />
                    } />
                    <Route path="/order" element={
                        <Order
                            order={order}
                        />
                    } />
                    <Route path="/login" element={
                        <Login
                            users={users}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                        />
                    } />
                    <Route path="/register" element={
                        <Register
                            users={users}
                            setUsers={setUsers}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                        />
                    } />
                    <Route path="/logout" element={
                        <Logout
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                        />
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}