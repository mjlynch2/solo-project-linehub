import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuAdminItem from '../MenuAdminItem/MenuAdminItem';
import CreateDish from '../CreateDish/CreateDish';

class MenuAdmin extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MENU' })
    }

    handleClick = () => {
        this.props.history.push(`/admin/menu/createdish`);
    }

    render() {
        return (
            <div>
                {this.props.menu.map(dish =>
                    <div key={dish.id}>
                        <MenuAdminItem name={dish.dish_name} id={dish.id} />
                    </div>
                )}
                <br/>
                <button onClick={this.handleClick}> Create New Dish</button>    
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu
})

export default connect(mapStateToProps)(MenuAdmin);