import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import ProductList from './component/ProductList';
import AddProduct from './component/AddProduct';
import Footer from './component/Footer';
import Reset from './component/Reset';

const initialProducts = [
  {
    id: 1,
    price: 99999,
    name: 'Iphone 10s Max',
    quantity: 0,
  },
  {
    id: 2,
    price: 9999,
    name: 'Redme 10s Max',
    quantity: 0,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const handleIncrement = (id) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(0, product.quantity - 1),
            }
          : product
      )
    );
  };

  const handleRemoveProduct = (id) => {
    setProducts((current) => current.filter((product) => product.id !== id));
  };

  const handleAddProduct = () => {
    const price = Number(newPrice);
    if (!newName || !price) return;

    const nextId = products.length
      ? Math.max(...products.map((item) => item.id)) + 1
      : 1;

    setProducts([
      ...products,
      { id: nextId, name: newName, price, quantity: 0 },
    ]);
    setNewName('');
    setNewPrice('');
  };

  const handleReset = () => {
    setProducts((current) =>
      current.map((product) => ({ ...product, quantity: 0 }))
    );
  };

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <AddProduct
        name={newName}
        price={newPrice}
        onNameChange={setNewName}
        onPriceChange={setNewPrice}
        onAdd={handleAddProduct}
      />
      <ProductList
        products={products}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemoveProduct}
      />
      <Reset onReset={handleReset} />
      <Footer total={total} />
    </>
  );
}

export default App;