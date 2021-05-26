import React from 'react';
import Child from './child';
class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:0
        }
    }
    data=(d)=>{
        this.setState({
            data:this.state.data+1
        })
    }
    render(){
        return(<div>
            <h1>Parent</h1>
            <h3>{this.state.data}</h3>
            <Child data={this.data}></Child>
        </div>)
    }
}
export default Parent