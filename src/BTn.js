import './style.css'
import React from 'react'
import FunctionCompo from './FunctionCompo'
import ClassCompo from './ClassCompo'


class Btnns extends React.Component{
    constructor(){
        super()
        this.state= {
            count1:0,
            count2:0,
        }
    }

    render(){
        return(
            
            <>
             <div className="btn-container">
                
                <button 
                className="btnn" 
                onClick={()=> this.setState({count1: !this.state.count1})}>Too See Styling in Function component</button>
                
                <button 
                className="btnn" 
                onClick={()=> this.setState({count2: !this.state.count2})}>Too See Styling in Class Component</button>
                 
             </div>
             {this.state.count1 && <FunctionCompo/>}
             {this.state.count2 && <ClassCompo/>}
             
            
            </>
        )
        
    }
}

export default Btnns;