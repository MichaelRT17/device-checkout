import React, {Component} from 'react';
import HistoryList from './HistoryList';

export default class DeviceHistoryPage extends Component {
    render() {
        return (
            <div>
                <h1>iPhone X (c8y3) History </h1>
                <HistoryList />
            </div>
        )
    }
}