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

class OrderItem extends Component {

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
        if (window.confirm(`Are you sure you want to permanently delete this dish? This action cannot be undone.`)) {
            this.props.dispatch({ type: 'DELETE_MENU', id: id });
        } else {
            return false;
        };
    }

    render() {
        return (
            <div>
                <ListItemText>{this.props.ingredientName}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit" onClick={() => this.handleEdit(this.props.ingredientName)}>
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </div>
        )
    }
}

export default connect()(OrderItem);