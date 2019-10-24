import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTabs from '../MaterialUI/AdminTabs';
import BackButton from '../MaterialUI/BackButton';

class Orders extends Component {

    render() {
        return (
            <div>
                Orders Page
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(Orders)