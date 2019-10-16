import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrepList extends Component {

    render() {
        return (
            <div>
                Gather and Prep: 
                {this.props.prepList.length == 0 ? 
                    <p>Nothing to prep</p> : 
                    <ul>{this.props.prepList.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
                }
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    prepList: reduxState.prepList
})

export default connect(mapStateToProps)(PrepList)