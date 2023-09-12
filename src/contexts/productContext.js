import axios from 'axios';
import React, { useReducer } from 'react';

export const productsContext = React.createContext();
const API = 'http://localhost:8000'

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createCategory = async (category) => {
    try {
      await axios.post(`${API}/categories`, category)
      alert('category created');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        pages: state.pages,
        categories: state.categories,
        oneProduct: state.oneProduct,
        createCategory
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
//CORS
