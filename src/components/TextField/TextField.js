import { useState } from 'react'
import './TextField.css'
const TextField =(props) => {



    
    const handleInputChange = (event) => {
        props.onChange(event.target.value)        
    }
    return (
        <div className="text-field">
            <label className='teste'>
                {props.label}
            </label>
            <input value = {props.value} onChange = {handleInputChange} required = {props.mandatory} placeholder= {props.placeholder} type={props.type || 'text'} ></input>
        </div>

    )
}

export default TextField