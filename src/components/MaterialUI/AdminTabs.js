import MenuAdmin from '../MenuAdmin/MenuAdmin';
import StationAdmin from '../StationAdmin/StationAdmin';
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Orders from '../Orders/Orders';

const styles = {
    tab: {
        // backgroundColor: '#484848',
        // color: 'white'
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
            variant='inherit'
        >
            {children}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div>
            <div style={styles.tab}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    // textColor="secondary"
                    variant="fullWidth"
                    aria-label="Admin Tabs"
                >
                    <Tab style={styles.tab} label="Menu" {...a11yProps(0)} />
                    <Tab style={styles.tab} label="Orders" {...a11yProps(1)} />
                    <Tab style={styles.tab} label="Stations" {...a11yProps(2)} />
                </Tabs>
            </div>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <MenuAdmin />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Orders />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <StationAdmin />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}