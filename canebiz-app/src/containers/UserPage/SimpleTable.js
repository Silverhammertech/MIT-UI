import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({

  root: {
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});




function SimpleTable(props) {
  const { classes } = props;
  console.log(props);
  console.log(props.items);
  let rows = props.items;
  return (
 
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Business</TableCell>
            <TableCell numeric>Address</TableCell>
            <TableCell numeric>City)</TableCell>
            <TableCell numeric>State</TableCell>
            <TableCell numeric>propTypes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(r => {
            return (
              <TableRow key={r.id}>
                <TableCell component="th" scope="row">
                  {r.name}
                </TableCell>
                <TableCell numeric>{r.address}</TableCell>
                <TableCell numeric>{r.city}</TableCell>
                <TableCell numeric>{r.state}</TableCell>
                <TableCell numeric>{r.type}</TableCell>
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

