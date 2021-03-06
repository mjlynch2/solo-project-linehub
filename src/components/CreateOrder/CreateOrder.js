import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { TextField, Button, } from '@material-ui/core';
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
            ingredient_id: 0,
            quantity: '',
            note: '',
            user_id: 0
        },
        ingredients: [],
        isLoading: false,
        quantity: '',
        vendor: ''
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_INGREDIENT' });
        this.setState({currentIngredient: {user_id: this.props.user.id}})
    }

    createNewOrder = () => {
        this.props.dispatch({ type: 'ADD_ORDER',  payload: this.state.currentIngredient});
        // alert(`New order created!`);
        console.log(this.state.currentIngredient);
        this.resetInput();  
    }

    handleChange = (value, actionMeta) => {
        this.setState({ currentIngredient: {...this.state.currentIngredient,
            name: value.label,
            ingredient_id: value.id }})
    };

    handleInput = (event, keyName) => {
        this.setState({currentIngredient: {...this.state.currentIngredient,
            [keyName]: event.target.value}})
    }

    resetInput = () => {
        this.quantityField.value = '';
        this.vendorField.value = '';
    }

    render() {

        return (
            <div className="orderDiv">
                <div className="labelDiv" onClick={this.secretClick}>Ingredient</div>
                <div className="selectDiv">
                    <Select
                        type='text'
                        options={this.props.options}
                        onChange={this.handleChange}
                        defaultValue={this.state.currentIngredient.name}
                    />
                </div>
                <TextField
                    id="quantityField" label="Amount" fullWidth margin="normal" placeholder="e.g. 5 cases" InputLabelProps={{ shrink: true }} inputRef={el => this.quantityField = el}
                    onChange={(event) => this.handleInput(event, 'quantity')}
                />
                <TextField
                    id="vendorField" label="Vendor" fullWidth margin="normal" placeholder="e.g. Red Table Meats" InputLabelProps={{ shrink: true }} inputRef={el => this.vendorField = el}
                    onChange={(event) => this.handleInput(event, 'note')}
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
    user: reduxState.user
})

export default connect(mapStateToProps)(CreateOrder);