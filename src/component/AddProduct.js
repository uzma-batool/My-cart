import React from 'react';

function AddProduct({ name, price, onNameChange, onPriceChange, onAdd }) {
  return (
    <section className="add-product-form">
      <div className="form-row">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
          onChange={(e) => onPriceChange(e.target.value)}
        />
        <button className="btn btn-primary add-button" onClick={onAdd}>
          Add
        </button>
      </div>
    </section>
  );
}

export default AddProduct;
