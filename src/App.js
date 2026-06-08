import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/navbar';
import ProductList from './component/ProductList';
import AddProduct from './component/AddProduct';
import Footer from './component/Footer';
import Reset from './component/Reset';


function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("myCartItems");
    return savedItems
      ? JSON.parse(savedItems)
      : [
          { id: 1, name: 'Iphone 10s Max', price: 99999, quantity: 0 },
          { id: 2, name: 'Redme 10s Max', price: 9999, quantity: 0 },
        ];
  });
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');

  useEffect(() => {
    localStorage.setItem('myCartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleIncrement = (id) => {
    setCartItems((current) =>
      current.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((current) =>
      current.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      )
    );
  };

  const handleRemoveProduct = (id) => {
    setCartItems((current) => current.filter((product) => product.id !== id));
  };

  const handleAddProduct = () => {
    const price = Number(newPrice);
    if (!newName || !price) return;

    const nextId = cartItems.length ? Math.max(...cartItems.map((i) => i.id)) + 1 : 1;

    setCartItems([...cartItems, { id: nextId, name: newName, price, quantity: 0 }]);
    setNewName('');
    setNewPrice('');
  };

  const handleReset = () => {
    setCartItems((current) => current.map((product) => ({ ...product, quantity: 0 })));
  };

  const total = cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0);

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
        products={cartItems}
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