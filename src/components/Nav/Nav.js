import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu'; 

const styles = {
  root: {
    float: 'right',
    color: 'white'
  }
}

class Nav extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={styles.root}
        >
          <MenuIcon/>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            component={Link} to ="/home"
            onClick={this.handleClose}
          >
            {/* Show this link if they are logged in or not,
              but call this link 'Home' if they are logged in,
              and call this link 'Login / Register' if they are not */}
            {this.props.user.id ? 'Home' : 'Login / Register'}
          </MenuItem>
            {/* Show the link to the info page and the logout button if the user is logged in */}
            {this.props.user.id && (
              <div>
                <MenuItem
                  component={Link} to={`/menu/${this.props.userStation.stationId}`}
                  onClick={this.handleClose}
                >
                  Dishes
                </MenuItem>
                <MenuItem
                  component={Link} to={`/notes`}
                  onClick={this.handleClose}
                >
                  Notes
                  </MenuItem>
                {this.props.user.employee_id<100 ?  
                  <MenuItem
                    component={Link} to="/admin"
                    onClick={this.handleClose}
                  >
                    Admin
                  </MenuItem> : ''}
                <MenuItem 
                  onClick={() => this.props.dispatch({type: 'LOGOUT' })}
                >
                  Logout
                </MenuItem>
              </div>
            )}
            {/* Always show this link since the about page is not protected */}
            {/* <MenuItem
            component={Link} to="/about"
            onClick={this.handleClose}
            >
              About
            </MenuItem> */}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  user: reduxState.user,
  userStation: reduxState.userStation
});

export default connect(mapStateToProps)(Nav);