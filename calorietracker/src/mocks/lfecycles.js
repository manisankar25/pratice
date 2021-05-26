import React, { Component } from 'react';
 class LifeCycle extends React.Component {
    constructor(props) {

        super(props)
        this.state={
         name:"mani1"
        }
        console.log("constructor")
    }
    //  static getDerivedStateFromProps(props,state) {
    //     console.log("getdervice state")
    //     return {name:props.sec}
    // }
    componentDidMount() {
        console.log("didmout")
        this.setState({
            name:'venkata'
        })

    }
    componentDidUpdate() {
        console.log("didUpdate")
       
            // this.setState({
            //     name:'kantipudi'
            // })

    }

    render() {
        console.log("render")
        console.log("intialprops",this.props)
        console.log("state",this.state)
        return (<div>{this.state.name}</div>)
    }
}
LifeCycle.defaultProps={
    sec:"sankar"
}
export default LifeCycle
