import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  DELETE_PRODUCT,
  ADD_ITEM_INPUT,
  ADD_ITEM,
  EDIT_ITEM,
  EDIT_ITEM_INPUT,
  EDIT_ITEM_SUCCESS,
  PAGE
} from "../actionTypes/products";
export function getProducts() {
  return {
    type: GET_PRODUCTS
  };
}
export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}
export function getProductsFailure(error) {
  return {
    type: GET_PRODUCTS_FAILURE,
    error
  };
}
export function deleteProduct(products) {
  return {
    type: DELETE_PRODUCT,
    products
  };
}
export function addItem(addProductin) {
  return {
    type: ADD_ITEM,
    addProductin
  };
}
export function addItemInput(addProductin) {
  return {
    type: ADD_ITEM_INPUT,
    addProductin
  };
}
export function editItem(prod) {
  return {
    type: EDIT_ITEM,
    prod
  };
}
export function editItemInput(editItem) {
  return {
    type: EDIT_ITEM_INPUT,
    editItem
  };
}
export function editItemSuccess(editProducts) {
  return {
    type: EDIT_ITEM_SUCCESS,
    editProducts
  };
}
export function page(currentPage) {
  return {
    type: PAGE,
    currentPage
  }
}
