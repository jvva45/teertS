import './Button.css'


const Button = (props) => {
    return (
    <button className="button" type='submit'>
        {props.children}
    </button>
    )
}


export default Button