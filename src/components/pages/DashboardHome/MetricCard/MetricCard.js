import './MetricCard.css'
const MetricCard = (props) => {
    const totalSales = 0
    const StockStatus = 0
    const TotalCostumer = 0
    const averageTicket = 55.18;
    return (

        <div className="card">
            <div className='card-header'>
                <span class="icon">{props.icon} </span>
                <span class="label"> {props.label} </span>
            </div>
            <h1> {props.name} </h1>
            <div class="card-value"> {props.value} </div>
        </div>




    )
};

export default MetricCard;
