import React from 'react';

function Product({ product, onIncrement, onDecrement, onRemove }) {
  return (
    <li className="product-item">
      <div className="product-details">
        <span>{product.name}</span>
        <span>₹{product.price}</span>
      </div>
      <div className="product-actions">
        <button className="btn btn-danger" onClick={() => onDecrement(product.id)}>-</button>
        <span className="product-quantity">{product.quantity}</span>
        <button className="btn btn-success" onClick={() => onIncrement(product.id)}>+</button>
        <button className="btn btn-outline-danger remove-button" onClick={() => onRemove(product.id)}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default Product;
