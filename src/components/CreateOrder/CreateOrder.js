import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import './CreateDish.css';

const styles = {
    button: {
        marginTop: 10,
        marginRight: 15,
        textAlign: 'center'
    },
}

class CreateOrder extends Component {

    state = {
        orderNotes: '',
        currentIngredient: {
            name: '',
            id: 0,
            quantity: '',
            vendor: ''
        },
        ingredients: [],
        isLoading: false,
        quantity: '',
        vendor: ''
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_INGREDIENT' });
    }

    createNewOrder = () => {
        // this.props.dispatch({ type: 'ADD_ORDER',  payload: {}});
        // alert(`New order created!`);
        console.log(this.state.currentIngredient);
        this.resetInput();
        
    }

    handleChange = (value, actionMeta) => {
        this.setState({ currentIngredient: {...this.state.currentIngredient,
            name: value.label,
            id: value.id }})
    };

    handleInput = (event, keyName) => {
        this.setState({currentIngredient: {...this.state.currentIngredient,
            [keyName]: event.target.value}})
    }

    resetInput = () => {
        this.setState({currentIngredient: {
            name: '',
            id: 0,
            quantity: '',
            vendor: ''
        }})
    }

    render() {

        return (
            <div className="orderDiv">
                <div className="labelDiv">Ingredient</div>
                <div className="selectDiv">
                    <Select
                        type='text'
                        options={this.props.options}
                        onChange={this.handleChange}
                        defaultValue={this.state.currentIngredient.name}
                    />
                </div>
                <TextField
                    label="Amount" fullWidth margin="normal" placeholder="e.g. 5 cases" value={this.state.currentIngredient.quantity} InputLabelProps={{ shrink: true }}
                    onChange={(event) => this.handleInput(event, 'quantity')}
                />
                <TextField
                    label="Vendor" fullWidth margin="normal" placeholder="e.g. Red Table Meats" value={this.state.currentIngredient.vendor} InputLabelProps={{ shrink: true }}
                    onChange={(event) => this.handleInput(event, 'vendor')}
                />
                <br />
                <Button style={styles.button} color='primary' variant="contained" aria-label="add" onClick={this.createNewOrder}>
                    Add to Order
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