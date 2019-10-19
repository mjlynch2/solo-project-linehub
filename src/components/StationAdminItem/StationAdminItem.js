import React, { Component } from 'react';
import { connect } from 'react-redux';

class StationAdminItem extends Component {

    state = {
        isEditable: false,
        stationName: ''
    }

    handleEdit = (name) => {
        this.setState({ isEditable: true, stationName: name })
    }

    handleSave = (id) => {
        this.props.dispatch({ type: 'UPDATE_STATION', payload: this.state.stationName, id: id });
        this.setState({ isEditable: false });
    }

    handleChange = (event) => {
        this.setState({ stationName: event.target.value });
    }

    render() {
        return (
            <div>
                {this.state.isEditable ?
                    <div>
                        <input type="text" defaultValue={this.props.name} onChange={event => this.handleChange(event)} />
                        <button className="saveChanges" onClick={() => this.handleSave(this.props.id)}>Save</button>
                    </div>
                    :
                    <div>
                        {this.props.name}
                        <button className="editButton" onClick={() => this.handleEdit(this.props.name)}>Edit</button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    station: reduxState.station
})

export default connect(mapStateToProps)(StationAdminItem)