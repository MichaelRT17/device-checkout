import React, {Component} from 'react';
import DeviceList from '../../DeviceList';
import DeviceDropDown from './DeviceDropDown';

export default class DeviceStatusPage extends Component {
    render() {
        return (
            <div>
                <h1>DeviceStatusPage</h1>
                <DeviceDropDown >
                    <DeviceList />
                </DeviceDropDown>
            </div>
        )
    }
}