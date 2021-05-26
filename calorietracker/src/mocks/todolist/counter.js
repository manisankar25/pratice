import React,{Component} from 'react';
class Counter extends React.Component{


    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    addCo=()=>{

        this.setState({
            count:this.state.count+1
        })

    }
    subCo=()=>{
        this.setState({
            count:this.state.count-1
        })

    }

    render(){
        return(<div>
            <h1>Counter App</h1>
            <h3>{this.state.count}</h3>
            <button onClick={this.addCo}>add</button>
            <button onClick={this.subCo}>sub</button>
            </div>)
    }
}
export default Counter;