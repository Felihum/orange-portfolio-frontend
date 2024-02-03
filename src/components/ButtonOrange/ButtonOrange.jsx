import React from "react"

// export default function Button(props){
//     return(
//         <button className="btn">
//             {props.valueBtn}
//         </button>
//     )
// }

// eslint-disable-next-line react/prop-types
const Button = ({ classN, value, email, password, onClick }) => {
    return (
        <button className={classN} onClick={onClick} >{value}</button>
    )
}


export default Button
