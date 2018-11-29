import React, { Component } from 'react';
import QRCode from 'react-qr-code';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: "#0B5666"
    },
    input: {
        textAlign: "center",
        color: 'red'
    }
});

class UserGenerationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "name"
        }
    }

    handleUpdate = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h2>You are creating a new user for the Legrand Team</h2>
                <QRCode value={this.state.name} />
                <br />
                <br />
                <input className={classes.input} onChange={this.handleUpdate('name')}/>
                <br />
                <Button variant="contained" className={classes.button}>
                    Create User
                </Button>
            </div>
        )
    }
}

UserGenerationPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserGenerationPage);