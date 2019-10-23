import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrepListItem from '../PrepListItem/PrepListItem';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class PrepList extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_PREPLIST', payload: {user_id: this.props.user.id}})
    }

    handleClick = () => {
        if(this.props.userStation.id != 0){
            this.props.history.push(`/menu/${this.props.userStation.id}`)
        } else {
            alert('Set your fucking station first you ass.')
        }
    }

    render() {
        return (
            <div className="mainContainer">
                {this.props.preplist.length == 0 ? 
                    <Button variant="contained" color="primary" onClick={this.handleClick}>Start a preplist</Button> :
                    <>{this.props.preplist.map((item) => <div key={item.id}><PrepListItem item={item} /></div>)}</>
                }
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