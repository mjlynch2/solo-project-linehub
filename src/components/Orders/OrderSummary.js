import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderItem from './OrderItem';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

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
                <TableRow key={item.id}>
                    <OrderItem item={item} />
                </TableRow>)
        )
    }

    render() {

        return (
            <div className="mainContainer">
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Qty</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.mapOrder()}
                    </TableBody>
                </Table>
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
