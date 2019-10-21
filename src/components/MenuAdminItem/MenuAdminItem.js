import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect()(MenuAdminItem)