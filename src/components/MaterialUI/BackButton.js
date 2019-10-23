import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const styles = {
    mainDiv: {
        backgroundColor: '#f3e5f5',
        width: '100%',
        display: 'inline-flex',
        height: '65',
        borderBottom: '1px solid #ce93d8',
    },
    title : {
        margin: '6px 15px',
        textAlign: 'center'
    },
    icon: {    
        textAlign: 'left',
        color: 'black'
    }
}

class BackButton extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div style={styles.mainDiv}>
                <IconButton aria-label="Back" onClick={this.goBack} style={styles.icon}>
                    <BackIcon fontSize="small"/>
                </IconButton>
                <Typography style={styles.title} variant="h5">
                    {this.props.title ? this.props.title : ''}
                </Typography>
            </div>
        );
    }
}

export default withRouter(BackButton);