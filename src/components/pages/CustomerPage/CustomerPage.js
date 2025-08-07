
import CustomerForm from './CustomerForm';
import { useCustomer } from '../../context/CustomerContext';

const CustomerPage = () => {
  const {  addCustomer } = useCustomer();

  const handleAddCliente = (novoCliente) => {
    addCustomer(novoCliente);
    
  };

  return (
    <div>
      <CustomerForm onSubmit={handleAddCliente} />
      {/* aqui pode listar clientes */}
    </div>
  );
};

export default CustomerPage;
