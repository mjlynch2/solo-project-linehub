import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Nav from '../Nav/Nav';
import AdminTabs from './AdminTabs';

const styles = {
    mainDiv: {
        backgroundColor: '#3f51b5',
        boxShadow: `0px 3px 4px 2px rgba(100,100,100,0.35)`,
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '75px',
    },
    title : {
        color: 'white',
    },
    subhead: {
        fontWeight: '10',
        color: 'white',
        fontSize: '16pt'
    },
    icon: {    
        textAlign: 'left',
        color: 'white'
    },
    empty: {
        width: 60,
    }
}

class BackButton extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render() {        
        return (
            <div style={styles.mainDiv}>
                {this.props.location.pathname === '/home' || '/admin' ? <div style={styles.empty}></div> :
                    <IconButton aria-label="Back" onClick={this.goBack} style={styles.icon}>
                        <BackIcon fontSize="small"/>
                    </IconButton>}
                {this.props.title != undefined ? <Typography style={styles.title} variant="h5">{this.props.title}</Typography> : <Typography style={styles.title} variant="h5">LineHub</Typography> }

                <Nav />
            </div>
        );
    }
}

export default withRouter(BackButton);