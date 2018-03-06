import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_ITEM_INPUT,
  EDIT_ITEM,
  EDIT_ITEM_INPUT,
  PAGE
} from "../actionTypes/products";
export default (
  prevState = {
    products: [],
    addProduct: {},
    editProduct: {},
    currentPage: 1,
    isLoading: false
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        isLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        products: action.products,
        isLoading: false
      };
    case ADD_ITEM_INPUT:
      return {
        ...prevState,
        addProduct: { ...prevState.addProduct, ...action.addProductin }
      }
    case EDIT_ITEM:
      return {
        ...prevState,
        editProduct: { ...action.prod }
      }
    case EDIT_ITEM_INPUT:
      return {
        ...prevState,
        editProduct: { ...prevState.editProduct, ...action.editItem }
      }
    case PAGE:
      return {
        ...prevState,
        currentPage: action.currentPage
      }
    default:
      return prevState;
  }
};
