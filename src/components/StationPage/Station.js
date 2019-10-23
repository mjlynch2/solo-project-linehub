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
        this.props.dispatch({ type: 'SET_STATION_FOR_USER', id: event.target.value.id, name: event.target.value.station_name })
    }

    render(){
        return(
            <div>
                {this.props.userStation.id === 0 ? 
                    <div>
                        What station are you working tonight?
                        <StationSelect
                            stationName={this.state.stationName} 
                            station={this.props.station} 
                            handleChange={this.handleChange}
                        />
                    </div>
                    :
                    <div>
                        You're working {this.props.userStation.station} tonight. 
                        <br/>
                        <PrepList/>
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