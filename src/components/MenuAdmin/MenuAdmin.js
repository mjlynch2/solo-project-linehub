import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuAdminItem from '../MenuAdminItem/MenuAdminItem';
import CreateDish from '../CreateDish/CreateDish';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = { 
    button: {
        marginBottom: 20,
    }
}

class MenuAdmin extends Component {

    state = {
        showCreateDish: false,
        isEditable: false,
        dishName: '',
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MENU' })
    }

    toggleCreateDish = () => {
        this.setState({showCreateDish: !this.state.showCreateDish})
        setTimeout(()=> {
            this.props.dispatch({ type: 'GET_MENU' })
        }, 500);
    }

    handleEdit = (name) => {
        this.setState({ isEditable: true, dishName: name })
    }

    handleClick = () => {
        this.setState({showCreateDish: true})
    }

    mapDishes = () => {
        return (
            this.props.menu.map(dish =>
                <ListItem key={dish.id}>
                    <MenuAdminItem name={dish.dish_name} id={dish.id} />
                </ListItem>)
        )
    }

    render() {

        return (
            <div className="mainContainer">
                {this.state.showCreateDish ? 
                    <CreateDish toggleCreateDish={this.toggleCreateDish} showCreateDish={this.state.showCreateDish}/> 
                    :
                    <>
                        <List>
                            {this.mapDishes()}
                        </List>
                        <br />
                        <Button style={styles.button} color='primary' variant="contained" aria-label="add" onClick={this.handleClick}>
                            <AddIcon />
                            Add New Dish
                        </Button>
                    </>
                } 
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu
})

export default connect(mapStateToProps)(MenuAdmin);