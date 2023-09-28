import React from 'react'
import './style.css'
import Head from './Head'
import ClassCompo from './ClassCompo'
import FunctionCompo from './FunctionCompo'

class App extends React.Component{
  constructor(){
      super()
      this.state= {
          count1:false,
          count2:false,
      }
  }

  render(){
      return(
          
          <>
          <Head/>
           <div className="btn-container">
              
              <button 
              className="btnn" 
              onClick={()=> this.setState({count1: !this.state.count1})}>Too See Styling in Function component</button>
              
              <button 
              className="btnn" 
              onClick={()=> this.setState({count2: !this.state.count2})}>Too See Styling in Class Component</button>
               {/*  */}
           </div>
           <div className="container">
           {this.state.count1 && <FunctionCompo/>}
           {this.state.count2 && <ClassCompo/>}
           </div>
           
          
          </>
      )
      
  }
}

export default App;