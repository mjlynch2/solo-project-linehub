import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateOrder from '../CreateOrder/CreateOrder';
import { Button, Stepper, StepLabel, Step, Typography } from '@material-ui/core';
import OrderSummary from './OrderSummary';
import { CSVDownload } from "react-csv";

function getSteps() {
    return ['Add items', 'Review Order'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <><CreateOrder /></>;
        case 1:
            return <><OrderSummary/></>;
        default:
            return 'Unknown Step';
    }
}

const styles = {
    stepperDiv: {
        width: '90%',
        display: 'inline-flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    mainDiv: {
        textAlign: 'center'
    },
    button: {
        margin: 10
    }
}

class Orders extends Component {
    
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleSubmit = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    }

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
        return (
            <CSVDownload data={this.props.order} target="_blank" />);

    };

    componentDidMount(){
        this.props.dispatch({ type: 'GET_ORDER'})
    }

    render() {
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div style={styles.mainDiv}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{activeStep === index ? label : ''}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div style={styles.mainDiv}>
                            <CSVDownload data={this.props.order} filename={'linehub_order.csv'}/>
                            <br/>
                            <Typography>Order successfully exported!</Typography>
                            <br/>
                            <Button variant='outlined' style={styles.button} onClick={this.handleReset}>
                                Create New Order
                            </Button>
                        </div>
                        ) : (
                            <div>
                                {getStepContent(activeStep)}
                                <div style={styles.stepperDiv}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={activeStep === 0 ? this.handleNext : this.handleSubmit}
                                    >
                                        {activeStep === 0 ? 'Review Order' : 'Submit Order'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    order: reduxState.order,
    user: reduxState.user
})

export default connect(mapStateToProps)(Orders);