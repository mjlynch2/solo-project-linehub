import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
      this.props.dispatch({type: 'RESET_USER_STATION'})
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="loginDiv">
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <TextField 
              label="Username:" 
              className="loginInputs"
              type="text" 
              autoFocus
              name="username" 
              variant="outlined"
              margin="normal"
              value={this.state.username} 
              onChange={this.handleInputChangeFor('username')}
              />
          </div>
          <div>
              <TextField
                label="Password:"
                className="loginInputs"
                type="password"
                name="password"
                variant="outlined"
                margin="normal"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
          </div>
          <br/>
          <div>
            <Button
              variant="contained"
              className="loginInputs"
              color="primary"
              type="submit"
            >
                Log In
              </Button>
          </div>
        </form>
        <div>
          <br/>
          <p>New employee?
            <Button
              variant="text"
              type="button"
              onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
            >
              Register
            </Button>
          </p>
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
