import { useState } from 'react';
import ProductForm from './ProductForm';
import { useCustomer } from '../../context/CustomerContext';

const ProductPage = () => {
  
  const { product, addProduct } = useCustomer();

  const handleAddProduct = (newProduct) => {
    
    addProduct(newProduct);
    
  };

  return (
    <div>
      <ProductForm onSubmit={handleAddProduct} />

      
    </div>
  );
};

export default ProductPage;
