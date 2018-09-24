import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';




const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        backgroundColor: 'lightsteelblue',
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
    backgroundcolor: "lightblue",
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

});


class LabCard extends Component {
  constructor(props) {
      super(props);
  }
state = { expanded: false,
          showModal: false,
          orders: false,
          viewArrray: [],
          rows: [ {
            "orderid": 11000,
            "status": "Payment Processing",
            "customer": "Scott Armstrong",
            "shipaddress": "1419 Westwood Blvd. Los Angeles, CA 90024-491",
            "total": "$95.78",
                    "oi1plant": "Blue Dream",
                    "oi1units": 5,
                    "oi1unitprice": 25,

                    "oi2plant": "L.A. Confidential",
                    "oi2units": 10,
                    "oi2unitprice": 25,

                    "oi3plant": "Maui Waui",
                    "oi3units": 3,
                    "oi3unitprice": 19,

                    "oi4plant": "",
                    "oi4units": 0,
                    "oi4unitprice": 0,

                    "oi5plant": "",
                    "oi5units": 0,
                    "oi5unitprice": 0,
        },
        {
            "orderid": 11001,
            "status": "On Hold",
            "customer": "Roy Jones",
            "shipaddress": "360 S Kenmore AVE #108, Los Angeles, CA 90020",
            "total": "$95.78",

                    "oi1plant": "Agent Orange",
                    "oi1units": 5,
                    "oi1unitprice": 18.50,
  
                    "oi2plant": "L.A. Confidential",
                    "oi2units": 10,
                    "oi2unitprice": 25,

                    "oi3plant": "Afgooey",
                    "oi3units": 12,
                    "oi3unitprice": 16.50,

                        "oi4plant": "Da Purps",
                        "oi4units": 10,
                        "oi4unitprice": 24,

                        "oi5plant": "Dairy Queen",
                        "oi5units": 31,
                        "oi5unitprice": 16.45,

        },            
        {
                "orderid": 11002,
                "status": "On Hold - Low Stock",
                "customer": "Dr June Watson",
                "shipaddress": "1608 Crown Hill AVE, Los Angeles, CA 900261",
                "total": "$95.78",

                        "oi1plant": "Deathstar",
                        "oi1units": 4,
                        "oi1unitprice": 32,

                        "oi2plant": "Smelliot",
                        "oi2units": 15,
                        "oi2unitprice": 12.50,

                        "oi3plant": "Snow Daawg",
                        "oi3units": 3,
                        "oi3unitprice": 18.75,

                        "oi4plant": "Purple Dragon",
                        "oi4units": 12,
                        "oi4unitprice": 15,

                        "oi5plant": "",
                        "oi5units": 0,
                        "oi5unitprice": 0,

        },
        {
            "orderid": 11003,
            "status": "Shipping",
            "customer": "Ming Wen",
            "shipaddress": "110 E 9th ST #STE C786, Los Angeles, CA 90015",
            "total": "$95.78",

                    "oi1plant": "Pex x Haze",
                    "oi1units": 100,
                    "oi1unitprice": 26,

                    "oi2plant": "",
                    "oi2units": 0,
                    "oi2unitprice": 0,

                    "oi3plant": "",
                    "oi3units": 0,
                    "oi3unitprice": 0,
                
                    "oi4plant": "",
                    "oi4units": 0,
                    "oi4unitprice": 0,

                    "oi5plant": "",
                    "oi5units": 0,
                    "oi5unitprice": 0,

        },
        {
        "orderid": 11004,
        "status": "Pre-Order",
        "customer": "Dio Rodrigues",
        "shipaddress": "400 S Hope ST #25TH FLOOR, Los Angeles, CA 90071",
        "total": "$95.78",

                "oi1plant": "Neville's Wreck",
                "oi1units": 75,
                "oi1unitprice": 16.79,

                "oi2plant": "Noggin",
                "oi2units": 25,
                "oi2unitprice": 21,

                "oi3plant": "Grape Ape",
                "oi3units": 15,
                "oi3unitprice": 17.45,

                "oi4plant": "Chernobyl",
                "oi4units": 50,
                "oi4unitprice": 27.80,

                "oi5plant": "",
                "oi5units": 0,
                "oi5unitprice": 0,
        },                
        {
        "orderid": 11005,
        "status": "Out of Stock",
        "customer": "Marcus LeRoy",
        "shipaddress": "11301 W Olympic BLVD #STE 720, Los Angeles, CA 90064",
        "total": "$95.78",

        "oi1plant": "Blue Dream",
        "oi1units": 5,
        "oi1unitprice": 25,

        "oi2plant": "L.A. Confidential",
        "oi2units": 10,
        "oi2unitprice": 25,

        "oi3plant": "Maui Waui",
        "oi3units": 3,
        "oi3unitprice": 19,

        "oi4plant": "",
        "oi4units": 0,
        "oi4unitprice": 0,

        "oi5plant": "",
        "oi5units": 0,
        "oi5unitprice": 0,
        },
        {
        "orderid": 11006,
        "status": "Fulfillment",
        "customer": "Olga Rasputin",
        "shipaddress": "11075 Kinross AVE, Los Angeles, CA 90024",
        "total": "$95.78",

        "oi1plant": "Agent Orange",
        "oi1units": 5,
        "oi1unitprice": 18.50,

        "oi2plant": "L.A. Confidential",
        "oi2units": 10,
        "oi2unitprice": 25,

        "oi3plant": "Afgooey",
        "oi3units": 12,
        "oi3unitprice": 16.50,

            "oi4plant": "Da Purps",
            "oi4units": 10,
            "oi4unitprice": 24,

            "oi5plant": "Dairy Queen",
            "oi5units": 31,
            "oi5unitprice": 16.45,

        },            
        {
        "orderid": 11007,
        "status": "Shipping",
        "customer": "Ella Black",
        "shipaddress": "3300 Wilshire BLVD, Los Angeles, CA 90010",
        "total": "$95.78",

            "oi1plant": "Deathstar",
            "oi1units": 4,
            "oi1unitprice": 32,

            "oi2plant": "Smelliot",
            "oi2units": 15,
            "oi2unitprice": 12.50,

            "oi3plant": "Snow Daawg",
            "oi3units": 3,
            "oi3unitprice": 18.75,

            "oi4plant": "Purple Dragon",
            "oi4units": 12,
            "oi4unitprice": 15,
   
            "oi5plant": "",
            "oi5units": 0,
            "oi5unitprice": 0,
   
        },
        {
        "orderid": 11008,
        "status": "Fulfillment",
        "customer": "Paddy O'Doors",
        "shipaddress": "5629 Brushton ST, Los Angeles, CA 90008",
        "total": "$95.78",

        "oi1plant": "Pex x Haze",
        "oi1units": 100,
        "oi1unitprice": 26,

        "oi2plant": "",
        "oi2units": 0,
        "oi2unitprice": 0,

        "oi3plant": "",
        "oi3units": 0,
        "oi3unitprice": 0,

        "oi4plant": "",
        "oi4units": 0,
        "oi4unitprice": 0,

        "oi5plant": "",
        "oi5units": 0,
        "oi5unitprice": 0,
        },
        {
        "orderid": 11009,
        "status": "Order Processing",
        "customer": "Francien T. Smith",
        "shipaddress": "2555 Tilden AVE, Los Angeles, CA 90064",
        "total": "$95.78",

        "oi1plant": "Neville's Wreck",
        "oi1units": 75,
        "oi1unitprice": 16.79,

        "oi2plant": "Noggin",
        "oi2units": 25,
        "oi2unitprice": 21,

        "oi3plant": "Grape Ape",
        "oi3units": 15,
        "oi3unitprice": 17.45,

        "oi4plant": "Chernobyl",
        "oi4units": 50,
        "oi4unitprice": 27.80,

        "oi5plant": "",
        "oi5units": 0,
        "oi5unitprice": 0,
        }
        ],
};



handleExpandClick = () => {

  this.setState(state => ({ expanded: !state.expanded }));

};

handleisOrderClick = () => {

  this.setState(state => ({ orders: !state.orders }));

};



render() {
  const { classes } = this.props;
  let cards = this.props.items;
  console.log(this.state.rows);




  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              {this.props.facilityname}
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              Please browse below to see the Canabis plants we currently have in stock for all your recreational and medicinal purposes.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center" >
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
              <Grid item key={cards.pid} sm={12} md={10} lg={6}>
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
                   <IconButton

                  className={classNames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}

                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more">

                <ExpandMoreIcon />
                </IconButton>
              </CardActions>                  
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Paper className={classes.root}>
          <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              ORDERS
            </Typography>    
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell numeric>Order Status</TableCell>
            <TableCell numeric>Customer</TableCell>
            <TableCell numeric>Shipping Address</TableCell>
            <TableCell numeric>Order Cost (inc Tax)</TableCell>
            <TableCell numeric>Item 1 - Product</TableCell>
            <TableCell numeric>Item 1 - Units</TableCell>
            <TableCell numeric>Item 2 - Product</TableCell>
            <TableCell numeric>Item 2 - Units</TableCell>
            <TableCell numeric>Item 3 - Product</TableCell>
            <TableCell numeric>Item 3 - Units</TableCell>
            <TableCell numeric>Item 4 - Product</TableCell>
            <TableCell numeric>Item 4 - Units</TableCell>
            <TableCell numeric>Item 5 - Product</TableCell>
            <TableCell numeric>Item 5 - Units</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {this.state.rows.slice(this.props.items.orderalert).map(row => {
           return(
           <TableRow key={row.orderid}>
             <TableCell component="th" scope="row">
               {row.orderid}
             </TableCell>
                <TableCell numeric>{row.status}</TableCell>
                <TableCell numeric>{row.customer}</TableCell>
                <TableCell numeric>{row.shipaddress}</TableCell>
                <TableCell numeric>{((row.oi1unitprice * row.oi1units * 1.1) + (row.oi2unitprice * row.oi2units * 1.1) +(row.oi3unitprice * row.oi3units * 1.1) +(row.oi4unitprice * row.oi4units * 1.1) +(row.oi5unitprice * row.oi5units * 1.1) )}</TableCell>
                <TableCell numeric>{row.oi1plant}</TableCell>
                <TableCell numeric>{row.oi1units}</TableCell>
                <TableCell numeric>{row.oi2plant}</TableCell>
                <TableCell numeric>{row.oi2units}</TableCell>
                <TableCell numeric>{row.oi3plant}</TableCell>
                <TableCell numeric>{row.oi3units}</TableCell>
                <TableCell numeric>{row.oi4plant}</TableCell>
                <TableCell numeric>{row.oi4units}</TableCell>
                <TableCell numeric>{row.oi5plant}</TableCell>
                <TableCell numeric>{row.oi5units}</TableCell> 
              </TableRow>
            );

     
        })}
        </TableBody>
      </Table>
    </Paper>
               
         
              </CardContent>
              </Collapse>


                </Card>
              </Grid>
            ))}

          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

}

LabCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabCard);