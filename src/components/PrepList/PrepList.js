import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrepListItem from '../PrepListItem/PrepListItem';

class PrepList extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_PREPLIST', payload: {user_id: this.props.user.id}})
    }

    handleClick = () => {
        if(this.props.userStation.id != 0){
            this.props.history.dispatch(`/menu/${this.props.userStation.id}`)
        } else {
            alert('Set your fucking station first you ass.')
        }
    }

    render() {
        return (
            <div>
                Gather and Prep:
                {this.props.preplist.length == 0 ? 
                    <button onClick={this.handleClick}>Start a preplist</button> :
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

export default connect(mapStateToProps)(PrepList)