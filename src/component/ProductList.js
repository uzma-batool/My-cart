import React from 'react';
import Product from './Product';

function ProductList({ products, onIncrement, onDecrement, onRemove }) {
  const productCount = products.length;

  return (
    <section className="product-list">
      <h2>Product List</h2>
      {productCount === 0 ? (
        <div className="empty-message">No item / product</div>
      ) : (
        <ul>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductList;
