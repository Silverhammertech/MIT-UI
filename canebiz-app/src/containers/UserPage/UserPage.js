import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GoogleMapsContainer from '../Mapping/GoogleMapsContainer';
import FindBusinesses from './FindBusinesses';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '700px',
  },
  card: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function UserPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
      <Grid item xs={12}>
          <Paper className={classes.paper}>
            <GoogleMapsContainer/>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.card}><FindBusinesses /></Card>
        </Grid>

 {/*}       <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
  </Grid>*/}
      </Grid>
    </div>
  );
}

UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(UserPage);