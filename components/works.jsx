import React, { useState } from 'react';

// the first button changes the value of the prop1 property, the second - prop2, and the third - prop3.
export function Work1() {
    const [props, setProps] = useState({});

    // change the value of the prop1 property
    function changeProp1() {
        setProps({ ...props, prop1: 'new value' });
    }

    // change the value of the prop2 property
    function changeProp2() {
        setProps({ ...props, prop2: 'new value' });
    }

    // change the value of the prop3 property
    function changeProp3() {
        setProps({ ...props, prop3: 'new value' });
    }

    return (
        <div>
            <h1>Works</h1>
            <button onClick={() => changeProp1()}>{props.prop1}</button>
            <button onClick={() => changeProp2()}>{props.prop2}</button>
            <button onClick={() => changeProp3()}>{props.prop3}</button>
        </div>
    )
}

// Take an array with initProds products and output it as an HTML table
export function Work2() {
    const [products, setProducts] = useState([
        { name: 'product1', price: 100 },
        { name: 'product2', price: 200 },
        { name: 'product3', price: 300 },
    ]);

    return (
        <div>
            <h1>Works</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// Take an array with initProds products and output it as an HTML table. At the end of each row, make a cell in which there will be a button to delete the product.
export function Work3() {
    const [products, setProducts] = useState([
        { name: 'product1', price: 100 },
        { name: 'product2', price: 200 },
        { name: 'product3', price: 300 },
    ]);

    // delete the product with the specified index
    function deleteProduct(index) {
        setProducts(products.filter((product, i) => i !== index));
    }

    return (
        <div>
            <h1>Works</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => deleteProduct(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


// Take an array with initProds products and output it as an HTML table. At the end of each row, make a cell in which there will be a button to delete the product.
// Make inputs under the table to add a new product.
export function Work4() {
    const [products, setProducts] = useState([
        { name: 'product1', price: 100 },
        { name: 'product2', price: 200 },
        { name: 'product3', price: 300 },
    ]);

    // delete the product with the specified index
    function deleteProduct(index) {
        setProducts(products.filter((product, i) => i !== index));
    }

    // add a new product
    function addProduct() {
        setProducts([...products, { name: 'new product', price: 1000 }]);
    }

    return (
        <div>
            <h1>Works</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => deleteProduct(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => addProduct()}>Add product</button>
        </div>
    )
}

// Take an array with initProds products and output it as an HTML table. At the end of each row, make a cell in which there will be a button to delete the product.
// Make inputs under the table to add a new product.
// Make a product editing form under the table. Add another column to the table, in which there will be buttons for editing products.
export function Work5() {
    const [products, setProducts] = useState([
        { name: 'product1', price: 100 },
        { name: 'product2', price: 200 },
        { name: 'product3', price: 300 },
    ]);

    // delete the product with the specified index
    function deleteProduct(index) {
        setProducts(products.filter((product, i) => i !== index));
    }

    // add a new product
    function addProduct() {
        setProducts([...products, { name: 'new product', price: 1000 }]);
    }

    // edit the product with the specified index
    function editProduct(index) {
        setProducts(products.map((product, i) => i === index ? { name: 'edited product', price: 1000 } : product));
    }

    return (
        <div>
            <h1>Works</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => deleteProduct(index)}>Delete</button></td>
                            <td><button onClick={() => editProduct(index)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => addProduct()}>Add product</button>
        </div>
    )
}


export function Work6() {
    const [products, setProducts] = useState([
        { name: 'product1', price: 100 },
        { name: 'product2', price: 200 },
        { name: 'product3', price: 300 },
    ]);
    const [editText, setEditText] = useState('');
    const [editText2, setEditText2] = useState('');

    // delete the product with the specified index
    function deleteProduct(index) {
        setProducts(products.filter((product, i) => i !== index));
    }

    // add a new product
    function addProduct() {
        setProducts([...products, { name: editText, price: editText2 }]);
    }

    // edit the product with the specified index
    function editProduct(index) {
        setProducts(products.map((product, i) => i === index ? { name: editText, price: editText2 } : product));
    }

    return (
        <div>
            <h1>Works</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => deleteProduct(index)}>Delete</button></td>
                            <td><button onClick={() => editProduct(index)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => addProduct()}>Add product</button>
            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
            <input type="text" value={editText2} onChange={(e) => setEditText2(e.target.value)} />
        </div>
    )
}