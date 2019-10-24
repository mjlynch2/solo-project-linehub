import React, { Component } from 'react';
import { connect } from 'react-redux';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PreplistIcon from '@material-ui/icons/PlaylistAddCheck';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import NotesIcon from '@material-ui/icons/Notes';
import { withRouter } from 'react-router-dom';


const styles = {
    flushToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0',
        boxShadow: `0px -2px 4px 1px rgba(100,100,100,0.15)`
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
            <>
                {this.props.location.pathname === '/admin' ? <></> :
                    <BottomNavigation
                        value={value}
                        onChange={this.handleChange}
                        showLabels
                        style={styles.flushToBottom}
                    >
                        <BottomNavigationAction label="Home" component={Link} to="/home" icon={<HomeIcon />} />
                        {/* <BottomNavigationAction label="Preplist" component={Link} to="/preplist" icon={<PreplistIcon />} /> */}
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