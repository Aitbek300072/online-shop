import React, { useReducer } from 'react';

export const productsContext = React.createContext();

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

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        pages: state.pages,
        categories: state.categories,
        oneProduct: state.oneProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
//CORS
