import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MENU' })
    }
    render() {
        return (
            <div>
                <h2>Stations:</h2>
                <pre>{JSON.stringify(this.props.menu)}</pre>
                {/* {this.props.station.map(station => <div key={station.id}>{station.station_name}</div>)} */}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu
})

export default connect(mapStateToProps)(Menu)