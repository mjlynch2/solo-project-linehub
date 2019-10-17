import React, { Component } from 'react';
import { connect } from 'react-redux';

class IngredientList extends Component {

    addToPrepList = (ingredient, event) => {
        let actionType = '';
        if (!event.target.checked) {
            actionType = 'REMOVE_FROM_PREPLIST';
        } else {
            actionType = 'ADD_TO_PREPLIST';
        }
        this.props.dispatch({ type: actionType, payload: {ingredient_id:ingredient.id, user_id: this.props.reduxState.user.id}});

    }

    render(){
        return(
            <div>
                <input
                    type="checkbox"
                    onChange={(event) => { this.addToPrepList(this.props.ingredient, event) }}
                />
                {this.props.ingredient.name}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(IngredientList);