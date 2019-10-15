import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dish extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_INGREDIENT_FOR_DISH', id: this.props.match.params.id })
    }

    render() {
        return (
            <div>
                <h2>NAME:</h2>
                {/* <pre>{JSON.stringify(this.props.menu)}</pre> */}
                {this.props.ingredient.map(ingredient => <div key={ingredient.id}>{ingredient.name}</div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    ingredient: reduxState.ingredient
})

export default connect(mapStateToProps)(Dish)