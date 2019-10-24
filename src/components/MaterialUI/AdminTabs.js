import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class AdminTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
        console.log(value);
        
    };


    render() {
        const { value } = this.state;
        return (
                <Tabs value={value} onChange={this.handleChange} style={styles.root} variant='fullWidth' indicatorColor='primary'>
                    <Tab label="Menu" component={Link} to="/admin/menu"/>
                    <Tab label="Orders" component={Link} to="/admin/orders"/>
                    <Tab label="Stations" component={Link} to="/admin/stations"/>
                    <Tab label="notes" />
                </Tabs>
        );
    }
}

export default AdminTabs;

