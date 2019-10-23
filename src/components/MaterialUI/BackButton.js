import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import { withRouter } from 'react-router-dom';

class BackButton extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <IconButton aria-label="Back" onClick={this.goBack}>
                    <BackIcon />
                </IconButton>
            </div>
        );
    }
}

export default withRouter(BackButton);