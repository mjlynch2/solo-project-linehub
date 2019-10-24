import React, { Component } from 'react';
import AdminTabs from '../MaterialUI/AdminTabs';
import BackButton from '../MaterialUI/BackButton';

class Admin extends Component {

    render() {
        return (
            <>
                <BackButton title="Admin" />
                <AdminTabs />
            </>
        )
    }
}

export default Admin;