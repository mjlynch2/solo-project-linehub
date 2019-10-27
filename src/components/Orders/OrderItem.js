import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton, TableCell } from '@material-ui/core';

class OrderItem extends Component {

    state = {
        isEditable: false,
        dishName: ''
    }

    handleEdit = (name) => {
        this.setState({ isEditable: true, dishName: name })
    }

    handleChange = (event) => {
        this.setState({ dishName: event.target.value });
    }

    // handleDelete = (id) => {
    //     if (window.confirm(`Are you sure you want to permanently delete this dish? This action cannot be undone.`)) {
    //         this.props.dispatch({ type: 'DELETE_MENU', id: id });
    //     } else {
    //         return false;
    //     };
    // }

    render() {
        return (
            <>
                <TableCell>{this.props.item.name}</TableCell>
                <TableCell>{this.props.item.note}</TableCell>
                <TableCell>{this.props.item.quantity}</TableCell>
                <TableCell>
                    <IconButton aria-label="edit" onClick={() => this.handleEdit(this.props.ingredientName)}>
                        <EditIcon />
                    </IconButton>
                </TableCell>
            </>
        )
    }
}

export default connect()(OrderItem);