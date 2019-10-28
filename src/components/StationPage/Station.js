import React, { Component } from 'react';
import { connect } from 'react-redux';
import StationSelect from '../MaterialUI/StationSelect';
import PrepList from '../PrepList/PrepList';

class Station extends Component {
    
    state = {
        stationName: ''
    }

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_STATIONS'});
    }

    handleChange = (event) => {
        this.setState({stationName: event.target.value})        
        this.props.dispatch({ type: 'SET_STATION_FOR_USER', userId: this.props.user.id, stationId: event.target.value.id, name: event.target.value.station_name })
    }

    render(){
        let isStationAssigned = false;
        if(this.props.userStation.userId === this.props.user.id && this.props.userStation.stationId > 0){
            isStationAssigned = true;
        }
        return(
            <div>
                {isStationAssigned ?
                    <div>
                        You're working {this.props.userStation.station} tonight.
                        <br />
                        <PrepList />
                    </div>
                    :
                    <div>
                        What station are you working tonight?
                        <br />
                        <StationSelect
                            stationName={this.state.stationName}
                            station={this.props.station}
                            handleChange={this.handleChange}
                        />
                    </div>}
                <br/>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    station: reduxState.station,
    user: reduxState.user,
    userStation: reduxState.userStation
})

export default connect(mapStateToProps)(Station);