import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Admin extends Component {

    render() {
        return (
            <div>
                <Link to="/admin/stations">
                    Stations
                </Link>
                <br/>
                <Link to="/admin/orders">
                    Orders
                </Link>
            </div>
        )
    }
}

export default Admin;