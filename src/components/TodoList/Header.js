import React, { Component } from 'react'




//refactor with class component

// export default class Header extends Component {
//     render() {
//         return (

//             <header>
//                 <h1>لیست انجام کار شاپرک</h1>
//             </header>

//         )
//     }
// }

//refactor with functional component


export default function Header() {

    return (
        <header>
            <h1>لیست انجام کار شاپرک</h1>
        </header>
    )
}


