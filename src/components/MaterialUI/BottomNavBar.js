import React, { Component } from 'react';
import { connect } from 'react-redux';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import NotesIcon from '@material-ui/icons/Notes';
import { withRouter } from 'react-router-dom';

const styles = {
    flushToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    }, 
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
            <>
                {this.props.location.pathname === '/admin' ? <></> :
                    <BottomNavigation
                        value={value}
                        onChange={this.handleChange}
                        showLabels
                        color="secondary"
                        style={styles.flushToBottom}
                    >
                        <BottomNavigationAction label="Home" component={Link} to="/home" icon={<HomeIcon />} />
                        <BottomNavigationAction label="My dishes" component={Link} to={`/menu/${this.props.userStation.id}`} icon={<RestaurantIcon />} />
                        <BottomNavigationAction label="Notes" icon={<NotesIcon/>}/>
                    </BottomNavigation>
                }
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    userStation: reduxState.userStation
})

export default withRouter(connect(mapStateToProps)(BottomNavBar));