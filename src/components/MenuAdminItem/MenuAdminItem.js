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

class MenuAdminItem extends Component {

    state = {
        isEditable: false,
        dishName: ''
    }

    handleEdit = (name) => {
        this.setState({ isEditable: true, dishName: name })
    }

    handleSave = (id) => {
        this.props.dispatch({ type: 'UPDATE_MENU', payload: this.state.dishName, id: id });
        this.setState({ isEditable: false });
    }

    handleChange = (event) => {
        this.setState({ dishName: event.target.value });
    }

    handleDelete = (id) => {
        if(window.confirm(`Are you sure you want to permanently delete this dish? This action cannot be undone.`)){
            this.props.dispatch({ type: 'DELETE_MENU', id: id});
        } else {
            return false;
        };
    }

    render() {
        return (
            <div>
                {this.state.isEditable ?
                    <div>
                        <TextField dense label="Dish Name" defaultValue={this.props.name} onChange={event => this.handleChange(event)}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit" onClick={() => this.handleDelete(this.props.id)}>
                                <DeleteIcon color="secondary"/>
                            </IconButton>
                        </ListItemSecondaryAction>
                        <br/>
                        <Button variant="outlined" style={styles.button} color="default" onClick={() => this.setState({isEditable: false})}>Cancel</Button>
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
                {/* <button onClick={() => this.handleDelete(this.props.id)}>Delete</button> */}
            </div>
        )
            }
        }
        
        export default connect()(MenuAdminItem);
        
// onClick={() => this.handleSave(this.props.id)}>Save</button>