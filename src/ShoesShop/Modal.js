import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { product } = this.props;
        if (!product) {
            return null;
        }

        return (
            <div className="modal fade"
                id="detail-modal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Tên sản phẩm</td>
                                        <td>{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Alias</td>
                                        <td>{product.alias}</td>
                                    </tr>
                                    <tr>
                                        <td>Gía sản phẩm</td>
                                        <td>{product.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả</td>
                                        <td>{product.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Thông tin ngắn gọn</td>
                                        <td>{product.shortDescription}</td>
                                    </tr>
                                    <tr>
                                        <td>Số lượng</td>
                                        <td>{product.quantity}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
