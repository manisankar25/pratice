import React,{Component} from 'react';
class Sankar extends React.Component {
    constructor(props){
        super(props);
    }
    

    render(){
       // console.log("classmani222222",this.props.dataFromMani="NOOOO")
        return(<div>
            <h1>props class 2 {this.props.dataFromMani}</h1>
        </div>)
    }

    }
export default Sankar     