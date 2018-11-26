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
    backgroundColor: "#0B5666",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
    padding: "4px 12px"
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    maxWidth: 360,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(status, time, user) {
  id += 1;
  return { id, status, time, user };
}

const rows = [
  createData('In', 'Tuesday Nov 6, 12:20pm', '-'),
  createData('Out', 'Monday Nov 12, 9:38am', 'Kyle Wheelhouse'),
  createData('In', 'Wednesday Nov 14, 4:21pm', '-'),
  createData('Out', 'Thursday Nov 15, 7:21am', 'Bryan Humpherys'),
  createData('In', 'Monday Nov 19, 5:13pm', '-'),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Status</CustomTableCell>
            <CustomTableCell>Time</CustomTableCell>
            <CustomTableCell>User</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.status}
                </CustomTableCell>
                <CustomTableCell>{row.time}</CustomTableCell>
                <CustomTableCell>{row.user}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);