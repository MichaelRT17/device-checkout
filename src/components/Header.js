import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpIcon from '@material-ui/icons/HelpOutlined';
import DeviceUnknownIcon from '@material-ui/icons/DeviceUnknown';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appBar: {
        backgroundColor: '#0B5666'
    },
    list: {
        width: 250,
    },
};

class ButtonAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            left: false
        }
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <Link to='/:company_id/status'>
                        <ListItem button>
                            <ListItemIcon><DeviceUnknownIcon /></ListItemIcon>
                            <ListItemText primary="Device Status" />
                        </ListItem>
                    </Link>
                    <Link to='/:company_id/users'>
                        <ListItem button>
                            <ListItemIcon><GroupIcon /></ListItemIcon>
                            <ListItemText primary="All Users" />
                        </ListItem>
                    </Link>
                    <Link to='/:company_id/generate-user'>
                        <ListItem button>
                            <ListItemIcon><GroupAddIcon /></ListItemIcon>
                            <ListItemText primary="Generate User (QR code)" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <HelpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon onClick={this.toggleDrawer('left', true)} />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            <Link to="/" style={{color: 'white'}}>
                                Device Checkout
                            </Link>
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);