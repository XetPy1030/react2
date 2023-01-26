import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Link, RouterProvider, useParams} from "react-router-dom";

function About() {
  return <h1>About</h1>;
}

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <Link to={'/products/1'}>Product 1</Link>
      <Link to={'/products/2'}>Product 2</Link>
      <Link to={'/products/3'}>Product 3</Link>
    </div>
  )
}

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  return (
    <div>
      <h2>{product.name}</h2>
      <p>ID: {product.id}</p>
    </div>
  );
}

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/products', element: <Products /> },
  { path: '/products/:id', element: <Product /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
