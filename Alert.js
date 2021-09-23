import React from 'react'

export default function Alert(props) {
    const captalize =(word)=>{
        let lower = word.toLowerCase();
        return lower.toUpperCase();
    }
    return (
        <div style={{height:"50px"}}>
        { props.alert &&  <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{captalize(props.alert.type)}</strong>   {props.alert.msg}.
            </div>
            </div>}
        </div>
    )
}
