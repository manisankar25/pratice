import React from 'react';
class Child extends React.Component {
    constructor(props) {
        super(props)
    }
    changeData = () => {
        this.props.data("mani")
    }
    render() {
        return (<div>
            <h1>Child</h1>
            <button onClick={this.changeData}>ChangeData</button>
        </div>)
    }
}
export default Child