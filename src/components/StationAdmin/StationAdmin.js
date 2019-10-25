import React, { Component } from 'react';
import { connect } from 'react-redux';
import StationAdminItem from '../StationAdminItem/StationAdminItem';
import { ListItem, List } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

const styles = {
    button: {
        marginBottom: 20,
    },
    saveButton: {
        margin: 10,
        width: 100,
        align: 'left',
        display: 'inline'
    },
    input: {
        textAlign: 'left'
    }
}

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

    mapStations = () => {
        return (
            this.props.station.map(station =>
                <ListItem key={station.id}>
                    <StationAdminItem name={station.station_name} id={station.id} />
                </ListItem>)
        )
    }

    render() {
        return (
            <>
                {/* <BackButton title="Admin" />
                <AdminTabs /> */}
                <div className="mainContainer">
                    <List>
                        {this.mapStations()}
                    </List>
                    {this.state.showInput ? 
                        <>
                            <TextField margin="dense" type="text" label="Station Name" placeholder="e.g. Garde Manger" onChange={event => this.handleChange(event)} />
                            <br/>
                            <Button variant="outlined" style={styles.saveButton} color="primary" onClick={() => this.setState({ showInput: false })}>Cancel</Button>
                            <Button variant="contained" style={styles.saveButton} color="primary" onClick={() => this.handleSave(this.props.id)}>Save</Button>
                        </>     
                        :
                        <>
                            <Button style={styles.button} color='primary' variant="contained" aria-label="add" onClick={this.handleClick}>
                                <AddIcon />
                                Add New Station
                            </Button>
                        </>
                    }

                </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    station: reduxState.station
})

export default connect(mapStateToProps)(StationAdmin)