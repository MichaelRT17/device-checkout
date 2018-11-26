import React from 'react';
import FeaturesCarousel from './FeaturesCarousel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './homePage.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: "#0B5666"
    },
    input: {
        display: 'none',
    },
});

function HomePage(props) {
    const { classes } = props;
    return (
        <div>
            <h1 className='title-desc'>Keep Track of Your Testing Devices.</h1>
            <FeaturesCarousel />
            <Button variant="contained" className={classes.button} >
                Get Started
            </Button>
        </div>
    )
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);