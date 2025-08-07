import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage/LoginPage';
import DashboardPage from './components/pages/DashboardPage/DashboardPage';

// CORRETO
import CustomerConsultation from './components/pages/CustomerConsultation/CustomerConsultation';

import ProductPage from './components/pages/Product/ProductPage';
import SalesPage from './components/pages/SalesPage/SalesPage';
import StockPage from './components/pages/Stock Page/StockPage';
import DashboardHome from './components/pages/DashboardHome/DashboardHome';
import CustomerPage from './components/pages/CustomerPage/CustomerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal de login */}
        <Route path="/" element={<LoginPage />} />

        {/* Rota pai que contém o sidebar */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardHome />} /> {/* <- rota principal do dashboard */}
          {/* Rotas filhas que aparecem no Outlet */}
          <Route path="SalesPage" element={<SalesPage />} />
          <Route path="CustomerPage" element={<CustomerPage />} />
          <Route path="ProductPage" element={<ProductPage />} />
          <Route path="StrockPage" element={<StockPage />} />
          <Route path="CustomerConsultationPage" element={<CustomerConsultation />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
