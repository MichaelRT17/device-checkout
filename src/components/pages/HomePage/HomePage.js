import React, {Component} from 'react';
import FeaturesCarousel from './FeaturesCarousel';
import './homePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1 className='title-desc'>Keep Track of Your Testing Devices.</h1>
                <FeaturesCarousel />
            </div>
        )
    }
}