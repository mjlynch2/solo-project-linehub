import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = {
    select: {
        minWidth: 150,
    
    }
}

class StationSelect extends Component {

    handleChange = event => {
        this.setState({ station: event.target.value });
    };

    render() {
        return (
                <FormControl>
                    <InputLabel>Station</InputLabel>
                    <Select
                        value={this.props.stationName}
                        onChange={this.props.handleChange}
                        style={styles.select}
                    >
                        {this.props.station.map(item => <MenuItem key={item.id} value={item}>{item.station_name}</MenuItem>)}
                    </Select>
                </FormControl>
        );
    }
}

export default StationSelect;
