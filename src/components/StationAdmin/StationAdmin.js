import React, { Component } from 'react';
import { connect } from 'react-redux';
import StationAdminItem from '../StationAdminItem/StationAdminItem';
import AdminTabs from '../MaterialUI/AdminTabs';
import BackButton from '../MaterialUI/BackButton';

class StationAdmin extends Component {

    state = {
        newStationName: '',
        showInput: false
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_STATIONS' })
    }

    handleClick = () => {
        this.setState({ showInput: true })
    }

    handleChange = (event) => {
        this.setState({ newStationName: event.target.value });
    }

    handleSave = () => {
        this.props.dispatch({ type: 'ADD_STATION', payload: this.state.newStationName});
        this.setState({ showInput: false, newStationName: ''})
    }

    render() {
        return (
            <>
                <BackButton title="Admin" />
                <AdminTabs />
                <div className="mainContainer">
                    {this.props.station.map(station => 
                        <div key={station.id}>
                            <StationAdminItem name={station.station_name} id={station.id} />
                        </div>)}
                    {this.state.showInput ? 
                        <div>
                            <input type="text" onChange={event=>this.handleChange(event)}/>
                            <button onClick={this.handleSave}>Save</button>
                        </div>
                        :
                        <></>}
                    <button onClick={this.handleClick}>Add new station</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    station: reduxState.station
})

export default connect(mapStateToProps)(StationAdmin)