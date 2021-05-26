import React,{Component} from 'react';
import Sankar from './classmani2';
class Mani extends React.Component {
    constructor(props){
        super(props);

    }
    

    render(){
    console.log("aaaaa",this.props)
        return(
        <div><h1>mani sankar</h1>
        <Sankar dataFromMani="data i want t change"></Sankar>
        </div>
        )
    }
}
Mani.defaultProps={
    name:'mani',
    age:27
}
export default Mani