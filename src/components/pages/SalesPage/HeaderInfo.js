import './HeaderInfo.css'
const HeaderInfo = (props) => {
    return (
        <div className="headerInfo">
            <div>
                <h3 className='headerStoreName'>{props.storeName} </h3>
                <p className='headerDate'> Date: {props.date} </p>
            </div>
            <div>
                <h3 className='headerUser' > User: {props.userName} </h3>
            </div>
        </div>
    )

}
export default HeaderInfo