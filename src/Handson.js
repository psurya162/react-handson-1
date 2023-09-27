
import React from "react"
class Class extends React.Component{
    constructor(){
        super();
        this.state = {
            First :"This is created usinng Class commponent",
            Second:"This  is done by using external CSS",
            Third:"This is done by using inline CSS"

        }
    }
    render(){
        return(
            < >
            <div className="first">
            <h1>{this.state.First}</h1>
                <h2>{this.state.Second}</h2>
                <h3>{this.state.Third}</h3>
            </div>
                
            </>
        )
    }
}
export default Class;







// import React from 'react'
// class ClassCompo extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"EA55"
//         }
//     }
//     render(){
//         return(
//             <>
//             <h1>Class Component</h1>
//             <h2>{this.state.name}</h2>
//             </>
            
//         )
//     }
// }

// export default ClassCompo;