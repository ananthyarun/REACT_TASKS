import {
  getProductsSuccess,
  getProductsFailure,
} from "../actionCreators/products";
import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS, DELETE_PRODUCT, ADD_ITEM, EDIT_ITEM_SUCCESS } from "../actionTypes/products";
function* getProducts() {
  let url = "http://localhost:4000/products";
  try {
    let products = yield fetch(url).then(r =>
      r.json()
    );
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}
function* deleteProduct(actions) {
  try {
    let products = yield fetch(`http://localhost:4000/products/${actions.products}`, {
      method: 'DELETE'
    }).then(r => r.json());

    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}
function* addItem(action) {
  try {
    let products = yield fetch("http://localhost:4000/products", {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(action.addProductin)
    }).then(result => result.json());

    yield put(getProductsSuccess(products));
  }
  catch (error) {
    yield put(getProductsFailure(error));
  }
}
function* editItemSuccess(action) {
  try {
    let products = yield fetch(`http://localhost:4000/products/${action.editProducts.id}`, {
      method: 'PUT',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(action.editProducts)
    }).then(result => result.json());
    yield put(getProductsSuccess(products));
  }
  catch (error) {
    yield put(getProductsFailure(error));
  }
}
export function* getProductsWatcher() {
  yield [takeLatest(GET_PRODUCTS, getProducts),
  takeLatest(DELETE_PRODUCT, deleteProduct),
  takeLatest(ADD_ITEM, addItem),
  takeLatest(EDIT_ITEM_SUCCESS, editItemSuccess)
  ];
}
