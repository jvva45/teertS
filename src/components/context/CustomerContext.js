// src/context/CustomerContext.js
import { createContext, useContext, useState } from 'react';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [product, setProduct] = useState([]);
  const [userLogin, setUser] = useState()
  const addCustomer = (newCustomer) => {
    setCustomers((prev) => [...prev, newCustomer]);
  };

  const addProduct = (newProduct) => {
    setProduct((prev) => [...prev, newProduct]);
  };

  const setUserContext = (userLogin) => {
    setUser(userLogin);
    
    
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, product, addProduct, userLogin, setUserContext }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => useContext(CustomerContext);
