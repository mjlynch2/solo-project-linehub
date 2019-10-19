import React, { Component } from 'react';
import { connect } from 'react-redux';
import StationAdminItem from '../StationAdminItem/StationAdminItem';

class StationAdmin extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_STATIONS' })
    }

    render() {
        return (
            <div>
                {this.props.station.map(station => 
                    <div key={station.id}>
                        <StationAdminItem name={station.station_name} id={station.id} />
                    </div>)}

            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    station: reduxState.station
})

export default connect(mapStateToProps)(StationAdmin)