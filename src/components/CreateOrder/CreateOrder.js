import React, { Component } from 'react';
import Creatable from 'react-select/creatable';
import Select from 'react-select';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { TextField, Button } from '@material-ui/core';
import './CreateDish.css';

const styles = {
    button: {
        marginTop: 10,
        marginRight: 15,
        width: 100
    },
}

class CreateOrder extends Component {

    state = {
        orderNotes: '',
        ingredients: [],
        isLoading: false,
        quantity: '',

    }

    createNewOrder = () => {
        this.props.dispatch({ type: 'ADD_ORDER', name: this.state.dishName, station: this.state.station, payload: this.state.ingredients });
        alert(`New order created!`);
    }

    handleChange = (value, actionMeta) => {
        this.setState({ ingredients: [...this.state.ingredients, value] })
    };

    render() {

        return (
            <div className="createDishDiv">
                <TextField
                    label="Dish name"
                    placeholder="e.g. Fusilli with basil pesto"
                    onChange={(event) => this.handleNameChange(event)}
                    margin="normal"
                    fullWidth
                />
                <Divider variant="middle" />
                <div className="labelDiv">What Station?</div>
                <div className="selectDiv">
                    <Select
                        options={this.props.station}
                        onChange={this.handleStationSelect}
                    />
                </div>
                <br />
                <Divider variant="middle" />
                <br />
                <div className="labelDiv">Add or Create New Ingredients</div>
                <div className="selectDiv">
                    <Creatable
                        options={this.props.options}
                        onCreateOption={this.handleCreate}
                        onChange={this.handleChange} />
                </div>
                {this.state.ingredients == null ? '' : <ul>{this.state.ingredients.map((item, index) => <li key={index}>{item.value}</li>)}</ul>}
                <Button variant="outlined" style={styles.button} color="primary" onClick={() => this.props.toggleCreateDish()}>Cancel</Button>
                <Button style={styles.button} color='primary' variant="contained" aria-label="add" onClick={this.createNewDish}>
                    Save
                </Button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    ingredient: reduxState.ingredient,
    order: reduxState.order,
    options: reduxState.ingredient.map(item => { return { value: item.name, label: item.name, id: item.id } }),
})

export default connect(mapStateToProps)(CreateOrder);