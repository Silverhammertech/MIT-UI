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


function SimpleTable(props) {
  const { classes } = props;
  console.log(props.elem.lab);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Plant</TableCell>
            <TableCell numeric>Quantity</TableCell>
            <TableCell numeric>Availability</TableCell>
            <TableCell numeric>Optimal Temp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {props.elem.lab.inventory.map(n => {
            return (
              <TableRow key={n.plantname}>
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
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);