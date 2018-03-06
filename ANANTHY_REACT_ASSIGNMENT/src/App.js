import React, { Component } from 'react';
import './App.css';
import Product from "./components/Product"
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/products";
import { withRouter } from "react-router-dom";
import Addnew from "./components/Addnew";
import EditProduct from "./components/EditProduct";
class App extends Component {
  componentWillMount() {
    this.props.actions.getProducts();
  }
  handleDeleteProduct = (product_id) => {
    this.props.actions.deleteProduct(product_id);
    window.location.href = "/";
  }
  handleChange = (p) => {
    const name = p.target.name;
    const value = p.target.value;
    const addProduct = {};
    addProduct[name] = value;
    this.props.actions.addItemInput(addProduct);
  }
  handleAdd = (addProduct) => {
    this.props.actions.addItem(addProduct);
    window.location.href = "/";
  }
  editProduct = (item) => {
    this.props.actions.editItem(item)
  }

  handleEditChanges = (p) => {
    const name = p.target.name;
    const value = p.target.value;
    const editItem = {};
    editItem[name] = value;
    this.props.actions.editItemInput(editItem);
  }
  handleEditClick = (editProducts) => {
    this.props.actions.editItemSuccess(editProducts);
    window.location.href = "/";
  }
  handlePageClick = (currentPage) => {
    this.props.actions.page(currentPage);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => this.props.isLoad ? ("Loading...") : (<Product {...props}
            products={this.props.products}
            editProduct={this.editProduct}
            deleteProduct={this.handleDeleteProduct}
            currentPage={this.props.currentPage}
            handlePageClick={this.handlePageClick}
          />)
          }
          />
          <Route exact path="/addnew" render={props => <Addnew {...props}
            addProductIn={this.props.addProduct}
            handleAddIn={this.handleAdd}
            handleChangeInput={this.handleChange}
          />
          } />
          <Route exact path="/editProduct" render={props => <EditProduct
            {...props}
            editProducts={this.props.editProd}
            handleEditChanges={this.handleEditChanges}
            handleEditClick={this.handleEditClick}
          />
          } />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
    addProduct: state.addProduct,
    editProd: state.editProduct,
    currentPage: state.currentPage,
    isLoad: state.isLoading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

