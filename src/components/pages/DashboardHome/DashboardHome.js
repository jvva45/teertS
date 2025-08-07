import { useState } from 'react';
import './DashboardHome.css'
import MetricCard from "./MetricCard/MetricCard";
import { FaDollarSign, FaShoppingCart, FaBox, FaUsers } from 'react-icons/fa';

// DashboardHome.jsx
const DashboardHome = () => {
    {/* Total de Vendas $ */ }
    const [totalSales, SetTotalSales] = useState(0)

    {/* Total de Vendas pedidos */ }
    const [totalNetSales, SetTotalNetSales] = useState(0)

    {/* Total de produtos $ */ }
    const [totalProducts, SetTotalProducts] = useState(0)

    {/* Total de Clientes $ */ }
    const [totalCostumers, SetTotalCostumres] = useState(0)


    return (

        <div className="dashboard-home">
            <h1> </h1>
            
            <div className="metrics-row">
                <MetricCard
                    icon={<FaDollarSign />}
                    value={'$250'}
                    name="R$ Gross Sales"
                    
                />
                <MetricCard
                    icon={<FaShoppingCart />}
                    value={totalNetSales}
                    name="Net Sales"
                />
                <MetricCard
                    icon={<FaBox />}
                    value={totalProducts}
                    name="Total Products"
                />
                <MetricCard
                    icon={<FaUsers />}
                    value={totalCostumers}
                    name="Total Customers"
                />
            </div>

        </div>

    )
};

export default DashboardHome;

