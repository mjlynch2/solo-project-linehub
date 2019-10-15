import React, { Component } from 'react';
import { connect } from 'react-redux';

class Station extends Component {

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_STATIONS'})
    }
    render(){
        return(
            <div>
                <h2>Stations:</h2>
                {/* <pre>{JSON.stringify(this.props.station)}</pre> */}
                {this.props.station.map(station => <div key={station.id}>{station.station_name}</div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    station: reduxState.station
})

export default connect(mapStateToProps)(Station)