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
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const rows = [

    { id: 'name', numeric: false, disablePadding: true, label: 'Plant' },
    { id: 'happy', numeric: true, disablePadding: false, label: 'Happiness' },
    { id: 'relaxed', numeric: true, disablePadding: false, label: 'Relaxed' },
    { id: 'uplifted', numeric: true, disablePadding: false, label: 'Uplift' },
    { id: 'euphoric', numeric: true, disablePadding: false, label: 'Euphoria' },
    { id: 'creative', numeric: true, disablePadding: false, label: 'Creativity' },
    { id: 'stress', numeric: true, disablePadding: false, label: 'Reduce Stress' },
    { id: 'depression', numeric: true, disablePadding: false, label: 'Treat Depression' },
    { id: 'pain', numeric: true, disablePadding: false, label: 'Reduce Pain' },
    { id: 'fatigue', numeric: true, disablePadding: false, label: 'Reduce Fatigue' },
    { id: 'appetiteloss', numeric: true, disablePadding: false, label: 'Increase Appetite' },
  
  ];
  

function SimpleTable(data) {


  return (
    <Paper className="Search">
      <Table >
        <TableHead>
          <TableRow key={rows.id}>
          <TableCell component="th" scope="row">
                  {rows.name}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.effectdata.Happy}</TableCell>
                      <TableCell numeric>{n.effectdata.Relaxed}</TableCell>
                      <TableCell numeric>{n.effectdata.Uplifted}</TableCell>
                      <TableCell numeric>{n.effectdata.Euphoric}</TableCell>
                      <TableCell numeric>{n.effectdata.Creative}</TableCell>
                      <TableCell numeric>{n.medicinalusedata.Stress}</TableCell>
                      <TableCell numeric>{n.medicinalusedata.Depression}</TableCell>
                      <TableCell numeric>{n.medicinalusedata.Pain}</TableCell>
                      <TableCell numeric>{n.medicinalusedata.Fatigue}</TableCell>
                      <TableCell numeric>{n.medicinalusedata.AppetiteLoss}</TableCell>
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