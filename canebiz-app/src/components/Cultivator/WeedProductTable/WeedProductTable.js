import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import WeedSimpleTable from './WeedSimpleTable';

const styles = {
  card: {
    minWidth: 275,
    backgroundColor: '#00BCD4',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function WeedProductTable(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
            <div className={classes.tableContainer}>
              <WeedSimpleTable />
            </div>
      </CardContent>
      <CardActions>
        <Button size="small">Product Page</Button>
      </CardActions>
    </Card>
  );
}

WeedProductTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeedProductTable);