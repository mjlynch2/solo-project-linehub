import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrepListItem from '../PrepListItem/PrepListItem';
import { withRouter } from 'react-router-dom';
import { Button, List, ListItem, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Divider, Typography } from '@material-ui/core';

const styles = {
    divider: {
        marginTop: 30,
        marginBottom: 30
    },
    header: {
        textAlign: 'left',
        marginLeft: 20
    },
    button: {
        width: '60vw',
        height: '8vh',
        marginTop: 30,
        fontSize: 14
    }
}

class PrepList extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_PREPLIST', payload: {user_id: this.props.user.id}})
    }

    handleClick = () => {
        if(this.props.userStation.id != 0){
            this.props.history.push(`/menu/${this.props.userStation.id}`)
        } else {
            alert('Please set your station first')
        }
    }

    render() {
        return (
            <div>
                {this.props.preplist.length == 0 ? 
                    <Button style={styles.button} variant="contained" color="primary" onClick={this.handleClick}>Start a preplist</Button> :
                    <>
                        <Divider style={styles.divider} variant='middle'/>
                            <Typography style={styles.header} variant='body1'>Prep List</Typography>
                                <List dense>
                                    {this.props.preplist.map((item) => 
                                        <ListItem key={item.id}>
                                            <PrepListItem item={item} />
                                        </ListItem>)}
                                </List>
                    </>}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    preplist: reduxState.preplist,
    user: reduxState.user,
    userStation: reduxState.userStation
})

export default withRouter(connect(mapStateToProps)(PrepList));