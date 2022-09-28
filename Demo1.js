import React, { Component } from 'react';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: 'Mustang',
            color: 'red'
        };
    }
    changeColor = () => {
        this.setState({ color: "blue"})
    }
    render() {
        return (
            <div>
                <p> It is a {this.state.color} {this.state.model}. </p>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}
export default Demo1;