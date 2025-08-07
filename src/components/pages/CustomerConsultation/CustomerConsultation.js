import { useCustomer } from '../../context/CustomerContext';
import DataTable from '../../ui/DataTable/DataTable';
import './CustomerConsultation.css';

const CustomerConsultation = () => {
  const { customers } = useCustomer();
  
  
  return (
    <div>
      <p className='section-title'>Customer Consultation</p>
      <DataTable items ={customers} />
    </div>
  );
};

export default CustomerConsultation;
