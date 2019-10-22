import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PreplistIcon from '@material-ui/icons/PlaylistAddCheck';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
    flushToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#f2f2f2'
    }
};

class BottomNavBar extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { classes } = this.props;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.flushToBottom}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Preplist" icon={<PreplistIcon />} />
                <BottomNavigationAction label="My dishes" icon={<RestaurantIcon />} />
            </BottomNavigation>
        );
    }
}

BottomNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavBar);