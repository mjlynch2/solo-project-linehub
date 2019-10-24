import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuAdminItem from '../MenuAdminItem/MenuAdminItem';
import CreateDish from '../CreateDish/CreateDish';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

class MenuAdmin extends Component {

    state = {
        showCreateDish: false,
        isEditable: false,
        dishName: '',

    }
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MENU' })
    }

    handleEdit = (name) => {
        this.setState({ isEditable: true, dishName: name })
    }

    handleClick = () => {
        this.setState({showCreateDish: true})
    }

    render() {
        return (
            <>
                <div className="mainContainer">
                    <h3>Menu</h3>
                    <List>
                        {this.props.menu.map(dish =>
                            <ListItem key={dish.id}>
                                <MenuAdminItem name={dish.dish_name} id={dish.id} />
                            </ListItem>)}
                    </List>
                    <br/>
                    <Fab color="primary" aria-label="add" onClick={this.handleClick}>
                        <AddIcon />
                    </Fab>
                    {this.state.showCreateDish ? <CreateDish /> : ''}    
                </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu
})

export default connect(mapStateToProps)(MenuAdmin);