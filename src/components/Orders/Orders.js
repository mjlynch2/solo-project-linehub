import React, { Component } from 'react';
import { connect } from 'react-redux';

class Orders extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_ORDER'})
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.order)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    order: reduxState.order
})

export default connect(mapStateToProps)(Orders)