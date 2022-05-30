import React, { Component } from 'react'
export default class ProductList extends Component {
  render() {
    const { products, onSelect } = this.props;

    return (
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-4 mb-4">
            <div className="card">
              <img src={product.image} alt={product.name} />
              <div className="card-body">
                <div className="card-title">{product.name}</div>
                <p className="card-text">{product.price}</p>
                <button
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#detail-modal"
                  onClick={() => onSelect(product)}
                >
                  Xem Chi Tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}