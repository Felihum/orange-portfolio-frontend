import React from "react"

// export default function Button(props){
//     return(
//         <button className="btn">
//             {props.valueBtn}
//         </button>
//     )
// }

const Button = ({classN,value}) => {
    return (
        <button className={classN} >{value}</button>
    )
}


export default Button
