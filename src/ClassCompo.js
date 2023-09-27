import './style.css'
import React from 'react'

class ClassCompo extends React.Component{
    render(){
        return(
            <>
            
            <div className='ClassCompo'>
            <h1>This is created By Using Class Component</h1>
                <h3>This is done by External CSS</h3>
                <h3 style={{color:'blue'}}>This is done by Inline CSS</h3>
            </div>
               
            </>
        )
    }
}

export default ClassCompo;