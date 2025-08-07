import { useCustomer } from '../../context/CustomerContext'
import DataTable from '../../ui/DataTable/DataTable'
import './StrockPage.css'

const StockPage = () => {
    
    const { product } = useCustomer()


    
    return (
        <div>
            <p className='section-title'>Producs Consultation</p>

             <DataTable items ={product} />
            
        </div>
    )

}
export default StockPage 