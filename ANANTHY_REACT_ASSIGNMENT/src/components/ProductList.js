import React, { Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import editicon from "../edit-icon.png";
import deleteicon from "../delete-icon.png"
class ProductList extends Component {
  render() {
    return (
      <tr className="table-align">
        <td>{this.props.product.id}</td>
        <td>{this.props.product.productName}</td>
        <td>{this.props.product.modelNumber}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.InTheBox}</td>
        <td>{this.props.product.size}</td>
        <td>{this.props.product.brand}</td>
        <td>{this.props.product.color}</td>
        <td>{this.props.product.touchScreen}</td>
        <td><Link to="/editProduct">
       <button type="button" className="btn btn-primary" onClick={() => { this.props.editProduct(this.props.product) }}> <img src={editicon} alt="edit" /> </button>
        </Link></td>
        <td><button type="button" className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteProduct(this.props.product.id) } }}><img src={deleteicon} alt="delete" /></button></td>
      </tr>
    )
  }
}
export default ProductList;


