import React, { Component } from 'react';
import Creatable from 'react-select/creatable';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { TextField } from '@material-ui/core';
import './CreateDish.css';

class CreateDish extends Component {

    state = {
        dishName: '',
        ingredients: [],
        isLoading: false,
    }

    componentDidMount(){
        this.props.dispatch({ type: 'GET_INGREDIENT'});
    }

    createNewIngredient = (name) => {
        return ({label: name, value: name})
    }

    handleCreate = (newIngredientName) => {
        this.setState({isLoading: true})
        this.props.dispatch({type: 'ADD_INGREDIENT', payload: newIngredientName})
        setTimeout(() => {
            const newIngredient = this.createNewIngredient(newIngredientName);
            this.setState({
                isLoading: false,
                ingredients: [...this.state.ingredients, newIngredient],
            });
        }, 1000);
    };

    createNewDish = () => {
        this.props.dispatch({type: 'ADD_MENU_ITEM', name: this.state.dishName, payload: this.state.ingredients});
        this.setState({dishName: ''})
    }

    handleChange = (value, actionMeta) => {
        this.setState({ ingredients: [...this.state.ingredients, value] })
    };

    handleNameChange = (event) => {
        this.setState({dishName: event.target.value});
    }

    render(){

        return(
            <div className="createDishDiv">
                <TextField
                    label="Dish name"
                    placeholder="e.g. Fusilli with basil pesto"
                    onChange={(event) => this.handleNameChange(event)}
                    margin="normal"
                    fullWidth
                />
                <Divider variant="middle"/>
                <div className="labelDiv">Add ingredient...</div>
                <div className="selectDiv">
                    <Creatable
                        options={this.props.options}
                        onCreateOption={this.handleCreate}
                        onChange={this.handleChange} />
                </div>
                {this.state.ingredients == null ? '' : <ul>{this.state.ingredients.map((item, index) => <li key={index}>{item.value}</li>)}</ul>}
                <button onClick={this.createNewDish}>Create Dish!</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    ingredient: reduxState.ingredient,
    options: reduxState.ingredient.map(item => {return {value: item.name, label: item.name, id: item.id}})
})

export default connect(mapStateToProps)(CreateDish);