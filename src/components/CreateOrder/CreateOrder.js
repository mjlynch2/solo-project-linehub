import React, { Component } from 'react';
import Creatable from 'react-select/creatable';
import Select from 'react-select';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
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
        currentIngredient: '',
        ingredients: [],
        isLoading: false,
        quantity: '',
        vendor: ''
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_INGREDIENT' });
    }

    createNewOrder = () => {
        this.props.dispatch({ type: 'ADD_ORDER',  payload: {}});
        alert(`New order created!`);
    }

    handleChange = (value, actionMeta) => {
        this.setState({ ingredients: [...this.state.ingredients, value], currentIngredient: value.label })
    };

    handleInput = (event, keyName) => {
        this.setState({[keyName]: event.target.value})
    }

    render() {

        return (
            <div className="orderDiv">
                <div className="labelDiv">Ingredient</div>
                <div className="selectDiv">
                    <Select
                        options={this.props.options}
                        onChange={this.handleChange}
                    />
                </div>
                <TextField
                    label="Amount"
                    margin="normal"
                    placeholder="e.g. 5 cases"
                    onChange={(event) => this.handleInput(event, 'quantity')}
                    InputLabelProps={{shrink: true}}
                />
                <TextField
                    label="Vendor"
                    placeholder="e.g. Red Table Meats"
                    onChange={(event) => this.handleInput(event, 'vendor')}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <Button style={styles.button} color='primary' variant="contained" aria-label="add" onClick={this.createNewDish}>
                    Add to order
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