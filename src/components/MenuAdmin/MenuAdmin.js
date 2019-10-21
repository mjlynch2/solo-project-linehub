import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateDish from '../CreateDish/CreateDish';

class MenuAdmin extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MENU' })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.menu)}
                <CreateDish />
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu
})

export default connect(mapStateToProps)(MenuAdmin);