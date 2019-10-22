import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Nav from '../Nav/Nav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        height: 50,
        width: '100%',
        justifyContent: 'space-between',
        position: 'relative'
    },
    name: {
        fontWeight: 10,
        flexGrow: 1
    },
    nav: {
        marginLeft: -12,
        margRight: 20,
    },
};

class TopNav extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position='static'>
                <Toolbar>
                    <Nav className={classes.nav} color="inherit"/>
                    <Typography className={classes.name} variant="h6" >
                        LineHub
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}


TopNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNav);