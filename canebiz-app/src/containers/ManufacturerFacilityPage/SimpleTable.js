import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, Unit$, StockQty, CBD, Purpose) {
  id += 1;
  return { id, name, Unit$, StockQty, CBD, Purpose };
}

const data = [
  createData('Cookie', 159, 6.0, 24, "Pain Relief"),
  createData('JellyBaby', 237, 9.0, 37, "Recreational"),
  createData('Oil Rub', 262, 16.0, 24, "Pain Relief"),
  createData('Sleeping Pill', 305, 3.7, 67, "Sleeping Aid"),
  createData('Cream', 356, 16.0, 49, "Pain Relief"),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell numeric>Units</TableCell>
            <TableCell numeric>Quantity in Stock</TableCell>
            <TableCell numeric>CBD %</TableCell>
            <TableCell numeric>Primary Usage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.Unit$}</TableCell>
                <TableCell numeric>{n.StockQty}</TableCell>
                <TableCell numeric>{n.CBD}</TableCell>
                <TableCell numeric>{n.Purpose}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);