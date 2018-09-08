import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Typography from '@material-ui/core/Typography';
import LabManager from '../../components/Cultivator/LabManager/LabManager';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class CultivatorDashboard extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Facility One" icon={<BusinessCenterIcon />} />
            <Tab label="Facility Two" icon={<BusinessCenterIcon />} />
            <Tab label="Facility Three" icon={<BusinessCenterIcon />} />
            <Tab label="Facility Four" icon={<BusinessCenterIcon />} />
            <Tab label="Facility Five" icon={<BusinessCenterIcon />} />
            <Tab label="Facility Six" icon={<BusinessCenterIcon />} />
            <Tab label="Facility Seven" icon={<BusinessCenterIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><LabManager /></TabContainer>}
        {value === 1 && <TabContainer>Facility Two</TabContainer>}
        {value === 2 && <TabContainer>Facility Three</TabContainer>}
        {value === 3 && <TabContainer>Facility Four</TabContainer>}
        {value === 4 && <TabContainer>Facility Five</TabContainer>}
        {value === 5 && <TabContainer>Facility Six</TabContainer>}
        {value === 6 && <TabContainer>Facility Seven</TabContainer>}
      </div>
    );
  }
}

CultivatorDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CultivatorDashboard);