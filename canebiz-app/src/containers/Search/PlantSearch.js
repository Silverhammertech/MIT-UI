import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import SearchTable from './SearchTable';


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
    
class PlantSearch extends Component {
  state = {
    happy: false,
    relaxed: false,
    uplifted: false,
    euphoric: false,
    creative: false,
    stress: false,
    depression: false,
    fatigue: false,
    pain: false,
    apploss: false,
    drymouth: false,
    dryeyes: false,
    dizzy: false,
    paranoia: false,
    headache: false,
    data: [
        {
            "plantid": 20000,
            "name": "Blue Dream",
            "effectdata": {
                "Happy": 10,
                "Relaxed": 9.5,
                "Uplifted": 8.7,
                "Euphoric": 8.6,
                "Creative": 6.5
            },
            "medicinalusedata": {
                "Stress": 10,
                "Depression": 9.25,
                "Pain": 7,
                "Fatigue": 4,
                "AppetiteLoss": 4
            },
            "sideeffectdata": {
                "DryMouth": 10,
                "DryEyes": 4.5,
                "Dizzy": 3.5,
                "Paranoid": 3.25,
                "Headache": 2
            },
            "dispensaries": {}
        },
        {
            "plantid": 20001,
            "name": "Sour Diessel",
            "effectdata": {
                "Happy": 10,
                "Relaxed": 8.25,
                "Uplifted": 8.1,
                "Euphoric": 7.8,
                "Creative": 6.5
            },
            "medicinalusedata": {
                "Stress": 10,
                "Depression": 9.6,
                "Pain": 6.75,
                "Fatigue": 4.4,
                "AppetiteLoss": 4.1
            },
            "sideeffectdata": {
                "DryMouth": 10,
                "DryEyes": 6,
                "Dizzy": 4,
                "Paranoid": 3.8,
                "Headache": 3.2
            },
            "dispensaries": {}
        },
        {
            "plantid": 20002,
            "name": "GSC",
            "effectdata": {
                "Happy": 10,
                "Relaxed": 9,
                "Uplifted": 7.8,
                "Euphoric": 7.1,
                "Creative": 5
            },
            "medicinalusedata": {
                "Stress": 10,
                "Depression": 8,
                "Pain": 7,
                "Fatigue": 5,
                "AppetiteLoss": 3.5
            },
            "sideeffectdata": {
                "DryMouth": 10,
                "DryEyes": 5,
                "Dizzy": 3,
                "Paranoid": 3,
                "Headache": 2
            },
            "dispensaries": {}
        },
        {
            "plantid": 20003,
            "name": "Granddaddy Purple",
            "effectdata": {
                "Happy": 10,
                "Relaxed": 7.3,
                "Uplifted": 7,
                "Euphoric": 6.7,
                "Creative": 4.7
            },
            "medicinalusedata": {
                "Stress": 10,
                "Depression": 9,
                "Pain": 8.5,
                "Fatigue": 7.6,
                "AppetiteLoss": 5
            },
            "sideeffectdata": {
                "DryMouth": 10,
                "DryEyes": 6,
                "Dizzy": 2,
                "Paranoid": 1.1,
                "Headache": 0.7
            },
            "dispensaries": {}
        },
        {
            "plantid": 20004,
            "name": "Girl Scout Cookies",
            "effectdata": {
                "Happy": 10,
                "Relaxed": 9,
                "Uplifted": 7.2,
                "Euphoric": 7,
                "Creative": 5
            },
            "medicinalusedata": {
                "Stress": 10,
                "Depression": 7.5,
                "Pain": 7,
                "Fatigue": 5,
                "AppetiteLoss": 3.4
            },
            "sideeffectdata": {
                "DryMouth": 10,
                "DryEyes": 5,
                "Dizzy": 3,
                "Paranoid": 3,
                "Headache": 1.8
            },
            "dispensaries": {}
        }
    ],

    searchcriteria: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    matches: []
  };

  handleChange = (name, position) => event => {
    this.setState({ [name]: event.target.checked });
    const newSearch = this.state.searchcriteria.slice(); //copy the array
    newSearch[position] = !newSearch[position]; //execute the manipulations - flip boolean
    this.setState({searchcriteria: newSearch}); //set the new state
  };


  // This search will be part of API or search engine in PRODUCTION
 performEffectsSearch(element) {
     //Create search elements to be rendered = start will all
     let result = true;  
     let proceed = false;
     // Check to see if we need to validate effects in search
     console.log(element);
     console.log(this.state.searchcriteria);

     if ((this.state.searchcriteria[0]) && result)
     {
       // We need to explore value of Happy because checkbox is selected
       if (element.Happy <=5) {
          result = false;
       }
     }
    
     if ((this.state.searchcriteria[1]) && result)
     {
       // We need to explore value of Relaxed because checkbox is selected
       if (element.Relaxed <= 5) {
          result = false;
       }
     }

     if ((this.state.searchcriteria[2]) && result)
     {
       // We need to explore value of Uplifted because checkbox is selected
       if (element.Uplifted <= 5) {
          result = false;
       }
     }

     if ((this.state.searchcriteria[3]) && result)
     {
       // We need to explore value of Euphoric because checkbox is selected
       if (element.Euphoric <= 5) {
          result = false;
       }
     }

     if ((this.state.searchcriteria[4]) && result)
     {
       // We need to explore value of Creative because checkbox is selected
       if (element.Creative <= 5) {
          result = false;
       }
     }
     console.log(result);
    return ( result )
     }

       // This search will be part of API or search engine in PRODUCTION
 performMedicalSearch(element) {
  //Create search elements to be rendered = start will all
  let result = true;  

  // Check to see if we need to validate effects in search
  console.log(element);
  console.log(this.state.searchcriteria);

  if ((this.state.searchcriteria[5]) && result)
  {
    // We need to explore value of Stress because checkbox is selected
    if (element.Stress <=5) {
       result = false;
    }
  }
 
  if ((this.state.searchcriteria[6]) && result)
  {
    // We need to explore value of Depression because checkbox is selected
    if (element.Depression <= 5) {
       result = false;
    }
  }

  if ((this.state.searchcriteria[7]) && result)
  {
    // We need to explore value of Pain because checkbox is selected
    if (element.Pain <= 5) {
       result = false;
    }
  }

  if ((this.state.searchcriteria[7]) && result)
  {
    // We need to explore value of Fatigue because checkbox is selected
    if (element.Fatigue <= 5) {
       result = false;
    }
  }

  if ((this.state.searchcriteria[9]) && result)
  {
    // We need to explore value of Appetite Loss because checkbox is selected
    if (element.AppetiteLoss <= 5) {
       result = false;
    }
  }
  console.log(result);
 return ( result )
  }

       // This search will be part of API or search engine in PRODUCTION
 performMedicalSearch(element) {
  //Create search elements to be rendered = start will all
  let result = true;  

  // Check to see if we need to validate effects in search
  console.log(element);
  console.log(this.state.searchcriteria);

  if ((this.state.searchcriteria[5]) && result)
  {
    // We need to explore value of Stress because checkbox is selected
    if (element.Stress <=5) {
       result = false;
    }
  }
 
  if ((this.state.searchcriteria[6]) && result)
  {
    // We need to explore value of Depression because checkbox is selected
    if (element.Depression <= 5) {
       result = false;
    }
  }

  if ((this.state.searchcriteria[7]) && result)
  {
    // We need to explore value of Pain because checkbox is selected
    if (element.Pain <= 5) {
       result = false;
    }
  }

  if ((this.state.searchcriteria[7]) && result)
  {
    // We need to explore value of Fatigue because checkbox is selected
    if (element.Fatigue <= 5) {
       result = false;
    }
  }

  if ((this.state.searchcriteria[9]) && result)
  {
    // We need to explore value of Appetite Loss because checkbox is selected
    if (element.AppetiteLoss <= 5) {
       result = false;
    }
  }
  console.log(result);
 return ( result )
  }


       // This search will be part of API or search engine in PRODUCTION
       performSideEffectsSearch(element) {
        //Create search elements to be rendered = start will all
        let result = true;  

        // Check to see if we need to validate effects in search
        console.log(element);
        console.log(this.state.searchcriteria);
      
        if ((this.state.searchcriteria[10]) && result)
        {
          // We need to explore value of Dry Mouth because checkbox is selected
          if (element.DryMouth <=5) {
             result = false;
          }
        }
       
        if ((this.state.searchcriteria[11]) && result)
        {
          // We need to explore value of Dry Eyes because checkbox is selected
          if (element.DryEyes <= 5) {
             result = false;
          }
        }
      
        if ((this.state.searchcriteria[12]) && result)
        {
          // We need to explore value of Dizzy because checkbox is selected
          if (element.Dizzy <= 5) {
             result = false;
          }
        }
    
        if ((this.state.searchcriteria[13]) && result)
        {
          // We need to explore value of Paranoia because checkbox is selected
          if (element.Paranoidranoid <= 5) {
             result = false;
          }
        }
      
        if ((this.state.searchcriteria[14]) && result)
        {
          // We need to explore value of Headache because checkbox is selected
          if (element.Headache <= 5) {
             result = false;
          }
        }
        console.log(result);
       return ( result )
        }

// Executes the necessary search
     manageSearch = (searchtype) => {
      let m = [];
      if (searchtype===1)
      { // Effects Only Search
        m = this.state.data.map( element => {
          console.log(element);
          if (this.performEffectsSearch(element.effectdata)) {
            return element;
          }
        })
        console.log(m);
        this.setState( { matches: m });
      }
      
      // Check if Medical Search
      else if (searchtype === 2)
      {
        m = this.state.data.map( element => {
        console.log(element);
        if (this.performMedicalSearch(element.medicinalusedata)) {
          return element;
        }
      })
      console.log(m);
      this.setState( { matches: m });
      }

      // The Side Effects Search
      else if (searchtype === 3)
      {
        m = this.state.data.map( element => {
        console.log(element);
        if (this.performSideEffectsSearch(element.sideeffectdata)) {
          return element;
        }
      })
      console.log(m);
      this.setState( { matches: m });
      }
    }

  render() {
    const { classes } = this.props;
    const { happy, relaxed, uplifted,euphoric,creative,stress,depression,pain,fatigue,apploss,drymouth, dryeyes, dizzy, paranoia, headache } = this.state;
    const error = Object.values(this.state).filter(v => v).length !== 2;

    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>>
        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Plant Search
        </Typography>
        <Grid item xs={12} >
          <Paper className={classes.control}>
            <Grid container justify='space-evenly' >
              <Grid item>
                <Card >
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Select desired effect(s)</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={happy} onChange={this.handleChange('happy', 0)} value="happy" />
                        }
                        label="Happiness"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={relaxed} onChange={this.handleChange('relaxed', 1)} value="relaxed" />
                        }
                        label="Relaxation"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={uplifted} onChange={this.handleChange('uplifted', 2)} value="uplifted" />
                        }
                        label="Uplifted"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={euphoric} onChange={this.handleChange('euphoric', 3)} value="euphoric" />
                        }
                        label="Euphoria"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={creative}
                            onChange={this.handleChange('creative', 4)}
                            value="creative"
                          />
                        }
                        label="Creativity"
                      />

                      <Button variant="outlined" color="primary" onClick={ () => this.manageSearch(1)}>
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
                          <Checkbox checked={stress} onChange={this.handleChange('stress', 5)} value="stress" />
                        }
                        label="I am stressed"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={depression} onChange={this.handleChange('depression', 6)} value="depression" />
                        }
                        label="I am feeling depressed"
                      />
                                  <FormControlLabel
                        control={
                          <Checkbox checked={pain} onChange={this.handleChange('pain', 7)} value="pain" />
                        }
                        label="I am in pain"
                      />
                                  <FormControlLabel
                        control={
                          <Checkbox checked={fatigue} onChange={this.handleChange('fatigue', 8)} value="fatigue" />
                        }
                        label="I am feeling tired"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={apploss}
                            onChange={this.handleChange('apploss', 9)}
                            value="apploss"
                          />
                        }
                        label="I have lost my appetite"
                      />
                      <Button variant="outlined" color="primary" onClick={ () => this.manageSearch(2)}>
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
                          <Checkbox checked={drymouth} onChange={this.handleChange('drymouth', 10)} value="drymouth" />
                        }
                        label="Dry Mouth"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={dryeyes} onChange={this.handleChange('dryeyes', 11)} value="dreyeyes" />
                        }
                        label="Dry Eyes"
                      />
                                  <FormControlLabel
                        control={
                          <Checkbox checked={dizzy} onChange={this.handleChange('dizzy', 12)} value="dizzy" />
                        }
                        label="Feeling Dizzy"
                      />
                                  <FormControlLabel
                        control={
                          <Checkbox checked={paranoia} onChange={this.handleChange('paranoia', 13)} value="paranoia" />
                        }
                        label="Feeling Paranoid"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={headache}
                            onChange={this.handleChange('headache', 14)}
                            value="headache"
                          />
                        }
                        label="Headache"
                      />
                      <Button variant="outlined" color="primary" onClick={ () => this.manageSearch(3)}>
                        Side-effect Search
                      </Button>                      
                    </FormGroup>

                  </FormControl>
                  </Card>
              </Grid>
            </Grid>

            <Grid container justify='center' toppadding='50px'>
            <Grid item > 
                                  <Button variant="outlined" color="primary" onClick={ () => this.manageSearch(1)}>
                                  Combined Search
                                </Button>
                                </Grid></Grid>
          </Paper>


        </Grid>
        <Paper className={classes.control}>
<Grid container justify='center' >  
                <Grid item xs={12}>
          <Card className={classes.card}><SearchTable key={this.state.matches.plantid} items={this.state.matches}/></Card>
        </Grid>
        </Grid>
        </Paper>
      </div>
      
    );
  }
}

PlantSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlantSearch);
