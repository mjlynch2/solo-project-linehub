import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrepList extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_PREPLIST'})
    }

    render() {
        return (
            <div>
                Gather and Prep: 
                {this.props.prepList.length == 0 ? 
                    <p>Nothing to prep</p> : 
                    <ul>{this.props.prepList.map((item) => <li key={item.id}>{item.ingredient_id}</li>)}</ul>
                }
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    prepList: reduxState.prepList,
    user: reduxState.user

})

export default connect(mapStateToProps)(PrepList)