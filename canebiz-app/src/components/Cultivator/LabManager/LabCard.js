import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },
      margin: {
        margin: theme.spacing.unit * 2,
      },
      padding: {
        padding: `0 ${theme.spacing.unit * 2}px`,
      },

  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 2000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


function LabCard(props) {
  console.log( props.items);
  const { classes } = props;
  let cards = props.items;
  console.log(props);

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              {props.facilityname}
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              Please browse below to see the Canabis plants we currently have in stock for all your recreational and medicinal purposes.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Add New Lab
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Remove Lab
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Modify Lab
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={cards.id} sm={12} md={10} lg={6}>
                <Card className={classes.card}>

                    <CardHeader

                    avatar={
                    <Avatar aria-label="Cultivation Lab" className={classes.avatar}>
                        {card.labtemp}
                    </Avatar>
                    }

                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }

                    title={card.name}
                    subheader={card.purpose}
                    />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="headline" component="h2">
                    {card.name}
                    </Typography>

                    <Paper className={classes.root}>
                    <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Plant</TableCell>
            <TableCell numeric>Quantity in Stock</TableCell>
            <TableCell numeric>Available</TableCell>
            <TableCell numeric>Ideal Temperature</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {card.inventory.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.plantname}
                </TableCell>
                <TableCell numeric>{n.plantqty}</TableCell>
                <TableCell numeric>{n.completedate}</TableCell>
                <TableCell numeric>{n.optimaltemp}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table> </Paper>

                  </CardContent>
                 
                  <CardActions>
                  <Badge color="secondary" badgeContent={Math.trunc(Math.random() *10)} className={classes.margin}>              
                    <Button variant="contained" size="small" color="primary">
                      View Orders
                    </Button>
                  </Badge> 
                  <Badge color="secondary" badgeContent={Math.trunc(Math.random() *10)} className={classes.margin}> 
                    <Button variant="contained" size="small" color="primary">
                      View Alerts
                    </Button>
                    </Badge>   
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

LabCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabCard);