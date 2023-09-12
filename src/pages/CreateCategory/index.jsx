import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/productContext';

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const { createCategory } = useContext(productsContext);

  return (
    <div>
      <h3>Create Category</h3>
      <input 
        placeholder='Category name'
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={() => createCategory({ name: categoryName })}>Create</button>
    </div>
  );
};

export default CreateCategory;