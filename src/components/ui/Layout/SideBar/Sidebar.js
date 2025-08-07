import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h3 className='sidebar-title'>teertS</h3>
            <nav>
                <ul className="menu">
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/dashboard/SalesPage">Sales</Link></li>
                    <li><Link to="/dashboard/CustomerPage">Customers</Link></li>
                    <li><Link to="/dashboard/ProductPage">Products</Link></li>
                    <li><Link to="/dashboard/StrockPage">Stock Check </Link></li>
                    <li><Link to="/dashboard/CustomerConsultationPage">Customer Lookup</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>

            </nav>
        </aside>
    );
};

export default Sidebar;
