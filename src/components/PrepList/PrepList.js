import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrepListItem from '../PrepListItem/PrepListItem';

class PrepList extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_PREPLIST', payload: {user_id: this.props.user.id}})
    }

    render() {
        return (
            <div>
                Gather and Prep:
                {this.props.preplist.length == 0 ? 
                    <p>Nothing to prep</p> : 
                    <>{this.props.preplist.map((item) => <div key={item.id}><PrepListItem item={item} /></div>)}</>
                }
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    preplist: reduxState.preplist,
    user: reduxState.user

})

export default connect(mapStateToProps)(PrepList)