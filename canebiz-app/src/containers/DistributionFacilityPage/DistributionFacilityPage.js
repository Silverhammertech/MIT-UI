import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: 1400,
    marginLeft: '10%',
    marginRight: '10%',
  },

  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
});

class DistributionFacilityPage extends Component {
  state = {
    happy: false,
    relaxed: false,
    uplifted: false,
    euphoric: false,
    creative: false,
    stress: false,
    depression: false,
    pain: false,
    fatigue: false,
    apploss: false,
    drymouth: false,
    dryeyes: false,
    dizzy: false,
    paranoia: false,
    headache: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { happy, relaxed, uplifted,euphoric,creative,stress,depression,pain,fatigue,apploss,drymouth, dryeyes, dizzy, paranoia, headache } = this.state;
    const error = Object.values(this.state).filter(v => v).length !== 2;

    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>>
        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Plant Search
        </Typography>
        <Grid item xs={12} offset xs={-1} >
          <Paper className={classes.control}>
            <Grid container justify='space-evenly' >
              <Grid item>
                <Card >
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Select desired effect(s)</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={happy} onChange={this.handleChange('happy')} value="happy" />
                        }
                        label="Happiness"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={relaxed} onChange={this.handleChange('relaxed')} value="relaxed" />
                        }
                        label="Relaxation"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={uplifted} onChange={this.handleChange('uplifted')} value="uplifted" />
                        }
                        label="Uplifted"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={euphoric} onChange={this.handleChange('euphoric')} value="euphoric" />
                        }
                        label="Euphoria"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={creative}
                            onChange={this.handleChange('creative')}
                            value="creative"
                          />
                        }
                        label="Creativity"
                      />

                      <Button variant="outlined" color="primary">
                        Effect Search
                      </Button>
                    </FormGroup>

                  </FormControl>
                  </Card>
                </Grid>
                <Grid item>
                  <Card>
                  <FormControl required error={error} component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Medical condition to be treated</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={stress} onChange={this.handleChange('stress')} value="stress" />
                        }
                        label="I am stressed"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={depression} onChange={this.handleChange('depression')} value="depression" />
                        }
                        label="I am feeling depressed"
                      />
                                  <FormControlLabel
                        control={
                          <Checkbox checked={pain} onChange={this.handleChange('pain')} value="pain" />
                        }
                        label="I am in pain"
                      />
                                  <FormControlLabel
                        control={
                          <Checkbox checked={fatigue} onChange={this.handleChange('fatigue')} value="fatigue" />
                        }
                        label="I am feeling tired"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={apploss}
                            onChange={this.handleChange('apploss')}
                            value="apploss"
                          />
                        }
                        label="I have lost my appetite"
                      />
                      <Button variant="outlined" color="primary">
                        Treatment Search
                      </Button>
                    </FormGroup>

                  </FormControl>
                  </Card>
              </Grid>

                <Grid item>
                  <Card >
                  <FormControl required error={error} component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Side effects to be avoided</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={drymouth} onChange={this.handleChange('drymouth')} value="drymouth" />
                        }
                        label="Dry Mouth"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={dryeyes} onChange={this.handleChange('dryeyes')} value="dreyeyes" />
                        }
                        label="Dry Eyes"
                      />
                                  <FormControlLabel
                        control={
                          <Checkbox checked={dizzy} onChange={this.handleChange('dizzy')} value="dizzy" />
                        }
                        label="Feeling Dizzy"
                      />
                                  <FormControlLabel
                        control={
                          <Checkbox checked={paranoia} onChange={this.handleChange('paranoia')} value="paranoia" />
                        }
                        label="Feeling Paranoid"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={headache}
                            onChange={this.handleChange('headache')}
                            value="headache"
                          />
                        }
                        label="Headache"
                      />
                      <Button variant="outlined" color="primary">
                        Side-effect Search
                      </Button>                      
                    </FormGroup>

                  </FormControl>
                  </Card>
              </Grid>
            </Grid>

            <Grid container justify='center'>
            <Grid item>
                                  <Button variant="outlined" color="primary">
                                  Effect Search
                                </Button>
                                </Grid></Grid>
          </Paper>
        </Grid>
        
      </div>
      
    );
  }
}

DistributionFacilityPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DistributionFacilityPage);



