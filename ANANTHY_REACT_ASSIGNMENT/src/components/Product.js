import React, { Component } from "react";
import ProductList from "./ProductList";
import "./Product.css";
import { Link } from "react-router-dom";

class Product extends Component {
  handleClick = (event) => {
    var currentPage = Number(event.target.id);
    this.props.handlePageClick(currentPage);
  }
  render() {
    const todosPerPage = 10;
    const currentPage = this.props.currentPage;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.products.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((todo, index) => {
      return <ProductList product={todo} key={index}editProduct={this.props.editProduct} deleteProduct={this.props.deleteProduct} />
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.products.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button className="paginationStyle"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });
    return (
      <div className="table_padding">
        <h2>PRODUCTS</h2>
        <Link to="/addnew">
          <button type="button" className="btn btn-primary addButton">
            ADD PRODUCT</button>
        </Link>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="table_header">ID</th>
              <th className="table_header">Product_Name</th>
              <th className="table_header">Model_Number</th>
              <th className="table_header">Price</th>
              <th className="table_header">InTheBox</th>
              <th className="table_header">Size</th>
              <th className="table_header">Brand</th>
              <th className="table_header">Color</th>
              <th className="table_header">TouchScreen</th>
              <th className="table_header">Edit</th>
              <th className="table_header">Delete</th>
            </tr>
          </thead>
          <tbody>
            {renderTodos}</tbody>
        </table>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    )
  }
}
export default Product;





