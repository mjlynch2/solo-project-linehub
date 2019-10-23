import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackButton from '../MaterialUI/BackButton';

class Menu extends Component {

    componentDidMount = () => {
        if (this.props.match.params.id === "0"){
            this.props.dispatch({ type: 'GET_MENU' })
        } else {
            this.props.dispatch({ type: 'GET_MENU_FOR_STATION', id: this.props.match.params.id })

        }
    }

    handleClick = (id) => {
        this.props.history.push(`/dish/${id}`);
    }
    render() {
        return (
            <div className="mainContainer">
                <BackButton />
                <h2>Dishes:</h2>
                {/* <pre>{JSON.stringify(this.props.menu)}</pre> */}
                {this.props.menu.map(dish => <div key={dish.id} onClick={() => this.handleClick(dish.id)}>{dish.dish_name}</div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu
})

export default connect(mapStateToProps)(Menu)