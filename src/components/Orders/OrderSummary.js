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

class OrderSummary extends Component {

    state = {
        isEditable: false,
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ORDER_TODAY' })
    }

    handleEdit = () => {
        this.setState({ isEditable: true })
    }

    mapDishes = () => {
        // return (
        //     this.props.order.map(item =>
        //         <ListItem key={item.id}>
        //             <OrderItem name={dish.dish_name} id={dish.id} />
        //         </ListItem>)
        // )
    }

    render() {

        return (
            <div className="mainContainer">
                {JSON.stringify(this.props.order)}
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
