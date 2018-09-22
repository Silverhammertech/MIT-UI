import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


const rows = [ {
    "orderid": 11000,
    "status": "Payment Processing",
    "customer": "Scott Armstrong",
    "shipaddress": "1419 Westwood Blvd. Los Angeles, CA 90024-491",
    "total": "$95.78",
        "orderitem1": {
            "plant": "Blue Dream",
            "units": 5,
            "unitprice": 25
        },
        "orderitem2": {
            "plant": "L.A. Confidential",
            "units": 10,
            "unitprice": 25
        },
        "orderitem3": {
            "plant": "Maui Waui",
            "units": 3,
            "unitprice": 19
        },
        "orderitem4": {
            "plant": "",
            "units": 0,
            "unitprice": 0
        },
        "orderitem5": {
            "plant": "",
            "units": 0,
            "unitprice": 0
        }
},
{
    "orderid": 11001,
    "status": "On Hold",
    "customer": "Roy Jones",
    "shipaddress": "360 S Kenmore AVE #108, Los Angeles, CA 90020",
    "total": "$95.78",
        "orderitem1": {
            "plant": "Agent Orange",
            "units": 5,
            "unitprice": 18.50
        },
        "orderitem2": {
            "plant": "L.A. Confidential",
            "units": 10,
            "unitprice": 25
        },
        "orderitem3": {
            "plant": "Afgooey",
            "units": 12,
            "unitprice": 16.50
        },
        "orderitem4": {
                "plant": "Da Purps",
                "units": 10,
                "unitprice": 24
            },
        "orderitem5": {
                "plant": "Dairy Queen",
                "units": 31,
                "unitprice": 16.45
            }
},            
{
        "orderid": 11002,
        "status": "On Hold - Low Stock",
        "customer": "Dr June Watson",
        "shipaddress": "1608 Crown Hill AVE, Los Angeles, CA 900261",
        "total": "$95.78",
            "orderitem1": {
                "plant": "Deathstar",
                "units": 4,
                "unitprice": 32
            },
            "orderitem2": {
                "plant": "Smelliot",
                "units": 15,
                "unitprice": 12.50
            },
            "orderitem3": {
                "plant": "Snow Daawg",
                "units": 3,
                "unitprice": 18.75
            },
            "orderitem4": {
                "plant": "Purple Dragon",
                "units": 12,
                "unitprice": 15
            },
            "orderitem5": {
                "plant": "",
                "units": 0,
                "unitprice": 0
            }
},
{
    "orderid": 11003,
    "status": "Shipping",
    "customer": "Ming Wen",
    "shipaddress": "110 E 9th ST #STE C786, Los Angeles, CA 90015",
    "total": "$95.78",
        "orderitem1": {
            "plant": "Pex x Haze",
            "units": 100,
            "unitprice": 26
        },
        "orderitem2": {
            "plant": "",
            "units": 0,
            "unitprice": 0
        },
        "orderitem3": {
            "plant": "",
            "units": 0,
            "unitprice": 0
        },
        "orderitem4": {
            "plant": "",
            "units": 0,
            "unitprice": 0
        },
        "orderitem5": {
            "plant": "",
            "units": 0,
            "unitprice": 0
        }
},
{
"orderid": 11004,
"status": "Pre-Order",
"customer": "Dio Rodrigues",
"shipaddress": "400 S Hope ST #25TH FLOOR, Los Angeles, CA 90071",
"total": "$95.78",
    "orderitem1": {
        "plant": "Neville's Wreck",
        "units": 75,
        "unitprice": 16.79
    },
    "orderitem2": {
        "plant": "Noggin",
        "units": 25,
        "unitprice": 21
    },
    "orderitem3": {
        "plant": "Grape Ape",
        "units": 15,
        "unitprice": 17.45
    },
    "orderitem4": {
        "plant": "Chernobyl",
        "units": 50,
        "unitprice": 27.80
    },
    "orderitem5": {
        "plant": "",
        "units": 0,
        "unitprice": 0
    }
},                
{
"orderid": 11005,
"status": "Out of Stock",
"customer": "Marcus LeRoy",
"shipaddress": "11301 W Olympic BLVD #STE 720, Los Angeles, CA 90064",
"total": "$95.78",
"orderitem1": {
"plant": "Blue Dream",
"units": 5,
"unitprice": 25
},
"orderitem2": {
"plant": "L.A. Confidential",
"units": 10,
"unitprice": 25
},
"orderitem3": {
"plant": "Maui Waui",
"units": 3,
"unitprice": 19
},
"orderitem4": {
"plant": "",
"units": 0,
"unitprice": 0
},
"orderitem5": {
"plant": "",
"units": 0,
"unitprice": 0
}
},
{
"orderid": 11006,
"status": "Fulfillment",
"customer": "Olga Rasputin",
"shipaddress": "11075 Kinross AVE, Los Angeles, CA 90024",
"total": "$95.78",
"orderitem1": {
"plant": "Agent Orange",
"units": 5,
"unitprice": 18.50
},
"orderitem2": {
"plant": "L.A. Confidential",
"units": 10,
"unitprice": 25
},
"orderitem3": {
"plant": "Afgooey",
"units": 12,
"unitprice": 16.50
},
"orderitem4": {
    "plant": "Da Purps",
    "units": 10,
    "unitprice": 24
},
"orderitem5": {
    "plant": "Dairy Queen",
    "units": 31,
    "unitprice": 16.45
}
},            
{
"orderid": 11007,
"status": "Shipping",
"customer": "Ella Black",
"shipaddress": "3300 Wilshire BLVD, Los Angeles, CA 90010",
"total": "$95.78",
"orderitem1": {
    "plant": "Deathstar",
    "units": 4,
    "unitprice": 32
},
"orderitem2": {
    "plant": "Smelliot",
    "units": 15,
    "unitprice": 12.50
},
"orderitem3": {
    "plant": "Snow Daawg",
    "units": 3,
    "unitprice": 18.75
},
"orderitem4": {
    "plant": "Purple Dragon",
    "units": 12,
    "unitprice": 15
},
"orderitem5": {
    "plant": "",
    "units": 0,
    "unitprice": 0
}
},
{
"orderid": 11008,
"status": "Fulfillment",
"customer": "Paddy O'Doors",
"shipaddress": "5629 Brushton ST, Los Angeles, CA 90008",
"total": "$95.78",
"orderitem1": {
"plant": "Pex x Haze",
"units": 100,
"unitprice": 26
},
"orderitem2": {
"plant": "",
"units": 0,
"unitprice": 0
},
"orderitem3": {
"plant": "",
"units": 0,
"unitprice": 0
},
"orderitem4": {
"plant": "",
"units": 0,
"unitprice": 0
},
"orderitem5": {
"plant": "",
"units": 0,
"unitprice": 0
}
},
{
"orderid": 11009,
"status": "Order Processing",
"customer": "Francien T. Smith",
"shipaddress": "2555 Tilden AVE, Los Angeles, CA 90064",
"total": "$95.78",
"orderitem1": {
"plant": "Neville's Wreck",
"units": 75,
"unitprice": 16.79
},
"orderitem2": {
"plant": "Noggin",
"units": 25,
"unitprice": 21
},
"orderitem3": {
"plant": "Grape Ape",
"units": 15,
"unitprice": 17.45
},
"orderitem4": {
"plant": "Chernobyl",
"units": 50,
"unitprice": 27.80
},
"orderitem5": {
"plant": "",
"units": 0,
"unitprice": 0
}
}
];

function OrdersTable(props) {
  const { classes } = props;
render() 
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Order ID</CustomTableCell>
            <CustomTableCell numeric>Order Status</CustomTableCell>
            <CustomTableCell numeric>Customer</CustomTableCell>
            <CustomTableCell numeric>Shipping Address</CustomTableCell>
            <CustomTableCell numeric>Order Cost (inc Tax)</CustomTableCell>
            <CustomTableCell numeric>Item 1 - Product</CustomTableCell>
            <CustomTableCell numeric>Item 1 - Units</CustomTableCell>
            <CustomTableCell numeric>Item 2 - Product</CustomTableCell>
            <CustomTableCell numeric>Item 2 - Units</CustomTableCell>
            <CustomTableCell numeric>Item 3 - Product</CustomTableCell>
            <CustomTableCell numeric>Item 3 - Units</CustomTableCell>
            <CustomTableCell numeric>Item 4 - Product</CustomTableCell>
            <CustomTableCell numeric>Item 4 - Units</CustomTableCell>
            <CustomTableCell numeric>Item 5 - Product</CustomTableCell>
            <CustomTableCell numeric>Item 5 - Units</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.orderid}>
                <CustomTableCell component="th" scope="row">
                  {row.customer}
                </CustomTableCell>
                <CustomTableCell numeric>{row.orderid}</CustomTableCell>
                <CustomTableCell numeric>{row.status}</CustomTableCell>
                <CustomTableCell numeric>{row.customer}</CustomTableCell>
                <CustomTableCell numeric>{row.shipaddress}</CustomTableCell>
                <CustomTableCell numeric>{((orderitem1.unitprice * orderitem1.units * 1.1) + (orderitem2.unitprice * orderitem2.units * 1.1) +(orderitem3.unitprice * orderitem3.units * 1.1) +(orderitem4.unitprice * orderitem4.units * 1.1) +(orderitem5.unitprice * orderitem5.units * 1.1) )}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem1.plant}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem1}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem2.plant}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem2}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem3.plant}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem3}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem4.plant}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem4}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem5.plant}</CustomTableCell>
                <CustomTableCell numeric>{row.orderitem5}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

OrdersTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrdersTable);