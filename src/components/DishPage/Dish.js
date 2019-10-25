import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientList from '../IngredientList/IngredientList';
import BackButton from '../MaterialUI/BackButton';
import { List, ListItem } from '@material-ui/core';

class Dish extends Component {

    state = {
        dishName: '',
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_PREPLIST', payload: { user_id: this.props.user.id } });
        this.props.dispatch({ type: 'GET_INGREDIENT_FOR_DISH', id: this.props.match.params.id });
        this.getDishName();
    }

    getDishName = () => {
        const dish = this.props.menu.find(({ id }) => id == this.props.match.params.id);
        if(dish != undefined){
            this.setState({dishName: dish.dish_name})
        }
    }

    render() {
        return (
            <>
                <BackButton title='Ingredients' />
                <div className="mainContainer">
                    <h3>{this.state.dishName}</h3>
                    <List dense>
                    {this.props.ingredient.map((ingredient, index) => 
                        <ListItem key={index}>
                            <IngredientList ingredient={ingredient} />
                        </ListItem>)}
                    </List>
                </div>
            </>
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