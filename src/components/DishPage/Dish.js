import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dish extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_INGREDIENT_FOR_DISH', id: this.props.match.params.id })
    }

    render() {
        const dish = this.props.menu.find(dish => dish.id == this.props.match.params.id);
        return (
            <div>
                <h2>{dish.dish_name}</h2>
                <pre>{JSON.stringify(dish)}</pre>
                {this.props.ingredient.map(ingredient => <div key={ingredient.id}>{ingredient.name}</div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    ingredient: reduxState.ingredient,
    menu: reduxState.menu
})

export default connect(mapStateToProps)(Dish)