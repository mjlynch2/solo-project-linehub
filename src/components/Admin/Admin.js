import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminTabs from '../MaterialUI/AdminTabs';
import BackButton from '../MaterialUI/BackButton';
import MenuAdmin from '../MenuAdmin/MenuAdmin';

class Admin extends Component {

    render() {
        return (
            <>
                <MenuAdmin />
            </>
        )
    }
}

export default Admin;