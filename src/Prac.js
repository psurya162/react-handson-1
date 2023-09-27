import React  from "react";
class Displaycompo extends React.Component{
    constructor(){
        super()
        this.state = {
            counnt :0
        }
    }
    render(){
        return(
            <>
                <h1>counnt :{this.state.counnt}</h1>
               <button onClick={()=> this.setState({counnt:this.state.counnt +1})}>incriment</button>
            </>
        )
    }
}

export default Displaycompo;