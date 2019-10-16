import React, { Component } from 'react';
import { connect } from 'react-redux';



class Dish extends Component {

    state = {
        dishName: '',
        isChecked: false
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_INGREDIENT_FOR_DISH', id: this.props.match.params.id })
        this.getDishName();
    }

    getDishName = () => {
        const dish = this.props.menu.find(({ id }) => id == this.props.match.params.id);
        if(dish != undefined){
            this.setState({dishName: dish.dish_name})
        }
    }

    addToPrepList = (ingredient, event) => {
        let actionType = 'ADD_TO_PREPLIST';
        if(!event.target.checked){
            actionType = 'REMOVE_FROM_PREPLIST'
        }
        this.props.dispatch({type: actionType, payload: ingredient})
    }

    render() {
        return (
            <div>
                <h3>{this.state.dishName}</h3>
                {this.props.ingredient.map(ingredient => 
                    <div key={ingredient.id}>
                        <input type="checkbox" onClick={(event) => { this.addToPrepList(ingredient.name, event) }}></input>
                        {ingredient.name}
                    </div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    ingredient: reduxState.ingredient,
    menu: reduxState.menu
})

export default connect(mapStateToProps)(Dish)