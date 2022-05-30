import React, { Component } from 'react'
import ProductList from './ProductList';
import data from "./data.json";
import Modal from './Modal';

export default class ShoesShop extends Component {
    state = {
        selectedProduct : null,
    }
    handleSelectProduct =(product) =>{
        console.log(product);
        this.setState({selectedProduct: product});
    };
    render() {
        return (
            <div className="container">
                <h1 className="text-center">
                    ShoesShop
                </h1>
                <ProductList products={data} onSelect={this.handleSelectProduct} />
                <Modal product={this.state.selectedProduct} />
            </div>
        )
    }
}
