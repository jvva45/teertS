import { useState } from 'react'
import { useCustomer } from '../../context/CustomerContext'
import HeaderInfo from './HeaderInfo'
import ProductSearch from './ProductSearch'
import './SalesPage.css'
import ProductTable from './ProductTable'

const SalesPage = () => {

    const [products, setProducts] = useState([]);
    const [showProductTable, setShowProductTable] = useState(false);
    const currentDate = new Date().toLocaleDateString()
    

    const { userLogin } = useCustomer();

    // Função para adicionar um produto na lista
    const onAdd = (newProduct) => {
        setProducts((prev) => [...prev, newProduct]);
    };
    const toggleProductTable = () => {
        setShowProductTable((prev) => !prev);
        
        
    };
    return (
        <div className="salespage">
            <HeaderInfo storeName="teertS" userName={userLogin} date={currentDate} />
            <ProductSearch onAdd={onAdd} onToggleTable= {toggleProductTable} />
            {showProductTable && <ProductTable products={products}
            
            columns = {["Product,QTY,Unit Price,Total"]}
            
            />}
        </div>
    )

}
export default SalesPage