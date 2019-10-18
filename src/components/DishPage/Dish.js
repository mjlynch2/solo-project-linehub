import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientList from '../IngredientList/IngredientList';
import { jsxAttribute } from '@babel/types';



class Dish extends Component {

    state = {
        dishName: '',
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_PREPLIST', payload: { user_id: this.props.user.id } });
        this.props.dispatch({ type: 'GET_INGREDIENT_FOR_DISH', id: this.props.match.params.id });
        this.getDishName();
    }

    // componentDidUpdate = (prevProps) => {
    //     if(this.props.prepList !== prevProps.prepList){
    //     }
    // }

    getDishName = () => {
        const dish = this.props.menu.find(({ id }) => id == this.props.match.params.id);
        if(dish != undefined){
            this.setState({dishName: dish.dish_name})
        }
    }

    render() {
        return (
            <div>
                ingredients: {JSON.stringify(this.props.ingredient)}
                <br/>
                prep list: {JSON.stringify(this.props.preplist)}
                <h3>{this.state.dishName}</h3>
                {this.props.ingredient.map((ingredient, index) => 
                    <div key={index}>
                        <IngredientList ingredient={ingredient}/>
                    </div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    ingredient: reduxState.ingredient,
    menu: reduxState.menu,
    preplist: reduxState.preplist,
    user: reduxState.user
})

export default connect(mapStateToProps)(Dish)