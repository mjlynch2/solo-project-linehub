import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MENU_FOR_STATION', id: this.props.match.params.id })
    }
    render() {
        return (
            <div>
                <h2>Dishes:</h2>
                {/* <pre>{JSON.stringify(this.props.menu)}</pre> */}
                {this.props.menu.map(dish => <div key={dish.id}>{dish.dish_name}</div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu
})

export default connect(mapStateToProps)(Menu)