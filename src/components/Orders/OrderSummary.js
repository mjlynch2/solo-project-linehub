import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuAdminItem from '../MenuAdminItem/MenuAdminItem';
import CreateDish from '../CreateDish/CreateDish';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import OrderItem from './OrderItem';

const styles = {
    button: {
        marginBottom: 20,
    }
}

class OrderSummary extends Component {

    state = {
        isEditable: false,
    }

    handleEdit = () => {
        this.setState({ isEditable: true })
    }

    mapOrder = () => {
        return (
            this.props.order.map(item =>
                <ListItem key={item.id}>
                    <OrderItem ingredientName={item.name} ingredientId={item.ingredient_id} userName={item.username} />
                </ListItem>)
        )
    }

    render() {

        return (
            <div className="mainContainer">
                <List>
                    {this.mapOrder()}
                </List>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    order: reduxState.order
})

export default connect(mapStateToProps)(OrderSummary);

// {
//     this.state.showCreateDish ?
//     <CreateDish toggleCreateDish={this.toggleCreateDish} showCreateDish={this.state.showCreateDish} />
//     :
//     <>
//         <List>
//             {this.mapDishes()}
//         </List>
//         <br />
//         <Button style={styles.button} color='primary' variant="contained" aria-label="add" onClick={this.handleClick}>
//             <AddIcon />
//             Add New Dish
//                         </Button>
//     </>
// }
