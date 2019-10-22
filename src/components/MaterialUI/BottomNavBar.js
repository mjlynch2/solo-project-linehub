import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PreplistIcon from '@material-ui/icons/PlaylistAddCheck';
import HomeIcon from '@material-ui/icons/Home';
import { Link, withRouter } from 'react-router-dom';


const styles = {
    flushToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0'
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

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                style={styles.flushToBottom}
            >
                <BottomNavigationAction label="Home" component={Link} to="/home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Preplist" component={Link} to="/preplist" icon={<PreplistIcon />} />
                <BottomNavigationAction label="My dishes" component={Link} to="/menu/1" icon={<RestaurantIcon />} />
            </BottomNavigation>
        );
    }
}

export default BottomNavBar;