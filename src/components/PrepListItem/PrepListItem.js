import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class PrepListItem extends Component {
    state = {
        isChecked: false
    }

    handleChange = () => {
        this.setState({isChecked: !this.state.isChecked})        
    }

    render() {
        return (
            <div>
                    <Checkbox
                        color='primary'
                        checked={this.state.isChecked}
                        onChange={() => this.handleChange()}
                    />
                    {this.props.item.name}
            </div>
        )
    }
}

export default PrepListItem;