import { useEffect, useState } from "react";
const TextInput = ({model,id,description}) => {

    const[value,setValue]=useState(model[id]);

    useEffect(()=>{
        setValue(model[id]);
    },[model,id]);

    const handleChange = (e) => {
        setValue(e.target.value );
        model[id]=e.target.value;
    }

    return (
        <>
            <label htmlFor={id}><b>{description}:</b></label>
            <input id={id} value={value} type="text" onChange={handleChange}></input>
        </>
    )
}

export default TextInput;