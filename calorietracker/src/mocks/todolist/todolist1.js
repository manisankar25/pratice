import React, { Component } from 'react';
class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputData: "",
            totalData: []
        }
    }
    getinputData = (GG) => {
        this.setState({
            inputData: GG.target.value
        })
    }
    addata = () => {
        this.setState({
            inputData: "",
            totalData: [...this.state.totalData, this.state.inputData],
        })
    }
    render() {
        console.log("rrrrrr", this.state)
        return (<div>
            <h1>TODOLIST</h1>
            <input onChange={this.getinputData} value={this.state.inputData} type='text'></input>
            <button onClick={this.addata}>AddData</button>
            <ol>
                {this.state.totalData.map((single) => {
                    return (<li>{single}</li>)
                })}
            </ol>
        </div>)
    }
}
export default Todolist;