import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrepListItem extends Component {
    state = {
        isChecked: false
    }

    toggleStrikethrough = (event) => {
        this.setState({isChecked: !this.state.isChecked})        
    }

    render() {
        return (
            <div>
                    <input 
                        type="checkbox"
                        checked={this.state.isChecked}
                        onChange={event => this.toggleStrikethrough(event)}
                    />
                    {this.props.item.name}
            </div>
        )
    }
}

export default PrepListItem;