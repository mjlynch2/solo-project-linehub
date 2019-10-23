import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackButton from '../MaterialUI/BackButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import GoIcon from '@material-ui/icons/ArrowForwardIos';
import { ListItemSecondaryAction, ListItemIcon, Typography } from '@material-ui/core';

const styles = {
    goIcon: {
        color: 'gray',
    },
    subhead: {
        fontSize: '14pt',
        textAlign: 'center'
    }
}

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
            <>
                <BackButton title='Dishes' />
                <div className="mainContainer">
                {this.props.match.params.id === '0' ? <Typography style={styles.subhead}>Full menu</Typography> : <Typography style={styles.subhead}>{this.props.userStation.station} Station</Typography>}
                    <List>
                        {this.props.menu.map(dish => <div key={dish.id}><ListItem button onClick={() => this.handleClick(dish.id)}>
                            <ListItemIcon>
                                <RestaurantMenuIcon fontSize='small'/>
                            </ListItemIcon>
                            <ListItemText disableTypography primary={dish.dish_name}/>
                            <ListItemSecondaryAction>
                                    <GoIcon style={styles.goIcon} fontSize='small'/>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider variant='middle' />
                        </div>
                        )}
                    </List>
            </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu,
    userStation: reduxState.userStation
})

export default connect(mapStateToProps)(Menu)