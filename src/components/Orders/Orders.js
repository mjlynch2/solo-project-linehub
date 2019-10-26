import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateOrder from '../CreateOrder/CreateOrder';
import { Button, Stepper, StepLabel, StepContent, Step, Typography } from '@material-ui/core';

function getSteps() {
    return ['Add items', 'Review Order', 'Submit Order'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <><CreateOrder /></>;
        case 1:
            return <>This is the order Summary</>;
        case 2:
            return <Button>Submit Order</Button>
        default:
            return 'Unknown Step';
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

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    componentDidMount(){
        this.props.dispatch({ type: 'GET_ORDER'})
    }

    render() {
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{activeStep === index ? label : ''}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            {/* <OrderHistory /> */}
                            <Button onClick={this.handleReset}>
                                Submit Order
                            </Button>
                        </div>
                    ) : (
                            <div>
                                {getStepContent(activeStep)}
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit Order' : 'Review Order'}
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

export default connect(mapStateToProps)(Orders)