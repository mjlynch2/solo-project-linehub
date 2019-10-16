import React, { Component } from 'react';
import { connect } from 'react-redux';



class Dish extends Component {

    state = {
        dishName: ''
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

    addToPrepList = (ingredient) => {
        this.props.dispatch({ type: 'ADD_TO_PREPLIST', payload: ingredient})
    }

    render() {
        // const dish = this.props.menu.find(({id}) => id == this.props.match.params.id);
        return (
            <div>
                {/* {dish == undefined ? '' : <h2>{dish.dish_name}</h2>} */}
                {/* <pre>{JSON.stringify(dish)}</pre> */}
                <h3>{this.state.dishName}</h3>
                {this.props.ingredient.map(ingredient => <div key={ingredient.id} onClick={() => {this.addToPrepList(ingredient.name)}}>{ingredient.name}</div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    ingredient: reduxState.ingredient,
    menu: reduxState.menu
})

export default connect(mapStateToProps)(Dish)