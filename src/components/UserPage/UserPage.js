import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import PrepList from '../PrepList/PrepList';
import Station from '../StationPage/Station';
import { Typography } from '@material-ui/core';
import BackButton from '../MaterialUI/BackButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <>
  <BackButton />
    <div className="mainContainer">
      <Typography variant="h5" >
        Hey { props.user.username }.
      </Typography>
      <br/>
      <Station />
    </div>
  </>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
