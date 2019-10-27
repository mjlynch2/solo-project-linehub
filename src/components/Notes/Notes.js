import React from 'react';
import { connect } from 'react-redux';
import Station from '../StationPage/Station';
import { Typography, List, ListItemText, ListItem } from '@material-ui/core';
import BackButton from '../MaterialUI/BackButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
let d = new Date();
let month = d.getMonth();
let day = d.getDate();
let today = `${month}/${day}` 

const Notes = (props) => (
    <>
        <BackButton title='Notes'/>
        <div className="mainContainer">
            <h3>Notes for {today}:</h3>
            <List dense>
                <ListItem>
                    <ListItemText primary="New Dish!!!! Braised Carrots" secondary="Coming off Saute, put one up before service for servers to try!!"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="RESERVATIONS: 119"/>
                </ListItem>
                <ListItem>
                    <ListItemText>DIETARY RESTRICTIONS: 3 DF, 3 GF, 1 Vegan</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText primary="VIPs: Mully, James, Sprague"/>
                </ListItem>
            </List>
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
export default connect(mapStateToProps)(Notes);