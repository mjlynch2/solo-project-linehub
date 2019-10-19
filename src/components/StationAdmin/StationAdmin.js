import React, { Component } from 'react';
import { connect } from 'react-redux';

class StationAdmin extends Component {

    state = {
        isEditable: false,
        stationName: ''
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_STATIONS' })
    }

    handleClick = (id) => {
        this.props.history.push(`/menu/${id}`);
    }

    handleDelete = (id, name) => {
        confirm(`Are you sure you want to delete the station ${name}? This action cannot be undone.` 
                ? this.props.dispatch({type: 'DELETE_STATION', id: id}) : false)
    }

    handleEdit = () => {
        this.setState({isEditable: !this.state.isEditable})
    }

    handleSave = (id) => {
        this.props.dispatch({type: 'UPDATE_STATION', payload: this.state.stationName, id: id});
        this.setState({stationName: ''});
    }

    handleChange = (event) => {
        this.setState({stationName: event.target.value});
    }
    render() {
        return (
            <div>
                {this.props.station.map(station => 
                    <div 
                        key={station.id} 
                        onClick={() => this.handleClick(station.id)}
                    >
                        {this.state.isEditable ? 
                            <div>
                                <input type="text" defaultValue={station.station_name} onChange={event => this.handleChange(event)} /> 
                                <button className="saveChanges" onClick={event => this.handleSave(station.id)}>Save</button>
                            </div>
                            : 
                            <div>
                                {station.station_name} 
                                <button className="editButton" onClick={this.handleEdit}>Edit</button>
                            </div>
                        }
                        
                        <button className="deleteButton" onClick={event => this.handleDelete(station.id, station.station_name)}>Delete Station</button>
                    </div>)}

            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    station: reduxState.station
})

export default connect(mapStateToProps)(StationAdmin)