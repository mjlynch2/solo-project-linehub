import React, { Component } from 'react';
import { connect } from 'react-redux';

class Station extends Component {

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_STATIONS'})
    }

    handleClick = (id) => {
        console.log('Station id is:', id);
        this.props.history.push(`/menu/${id}`);
    }
    render(){
        return(
            <div>
                Choose your station
                {/* <pre>{JSON.stringify(this.props.station)}</pre> */}
                {this.props.station.map(station => <div key={station.id} onClick={() => this.handleClick(station.id)}>{station.station_name}</div>)}

            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    station: reduxState.station
})

export default connect(mapStateToProps)(Station)