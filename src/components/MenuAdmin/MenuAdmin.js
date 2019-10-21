import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuAdminItem from '../MenuAdminItem/MenuAdminItem';

class MenuAdmin extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MENU' })
    }

    render() {
        return (
            <div>
                {this.props.menu.map(dish =>
                    <div key={dish.id}>
                        <MenuAdminItem name={dish.dish_name} id={dish.id} />
                    </div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu
})

export default connect(mapStateToProps)(MenuAdmin);