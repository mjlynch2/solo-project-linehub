import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    <ul>{this.props.preplist.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
                }
                {JSON.stringify(this.props.preplist)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    preplist: reduxState.preplist,
    user: reduxState.user

})

export default connect(mapStateToProps)(PrepList)