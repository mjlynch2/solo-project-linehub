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
        this.props.dispatch({ type: actionType, payload: {ingredient_id:ingredient.id, user_id: this.props.user.id}});
    }

    isOnPreplist = (id) => {
        const itemToFind = this.props.preplist.filter(item => item.ingredient_id === id);
        console.log('ITEM', itemToFind);
        
        if(itemToFind.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    render(){
        return(
            <div>
                <input
                    type="checkbox"
                    checked={this.isOnPreplist(this.props.ingredient.id)}
                    onChange={(event) => { this.addToPrepList(this.props.ingredient, event) }}
                />
                {this.props.ingredient.name}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    preplist: reduxState.preplist
})

export default connect(mapStateToProps)(IngredientList);