import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemText, ListItemSecondaryAction, IconButton, TextField, Button } from '@material-ui/core';

const styles = {
    button: {
        marginTop: 10,
        marginRight: 15,
        width: 100
    },
}

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
                        <ListItemText>
                            <TextField margin="dense" type="text" label="Station Name" defaultValue={this.props.name} onChange={event => this.handleChange(event)} />
                        </ListItemText>
                        <Button variant="outlined" style={styles.button} color="primary" onClick={() => this.setState({ isEditable: false })}>Cancel</Button>
                        <Button variant="contained" style={styles.button} color="primary" onClick={() => this.handleSave(this.props.id)}>Save</Button>
                    </div>
                    :
                    <div>
                        <ListItemText>{this.props.name}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit" onClick={() => this.handleEdit(this.props.name)}>
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
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