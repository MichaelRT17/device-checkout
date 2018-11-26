import React, { Component } from 'react';
import QRCode from 'react-qr-code';

export default class UserGenerationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    handleUpdate(input) {
        this.setState({
            value: input
        })
    }

    render() {
        console.log(this.state.value)
        return (
            <div>
                <QRCode value={this.state.value} />
                <br />
                <input onChange={e => this.handleUpdate(e.target.value)}/>
            </div>
        )
    }
}