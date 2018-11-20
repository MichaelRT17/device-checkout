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

let id = 0;
function createData(device, device_id, time, user) {
  id += 1;
  return { id, device, device_id, time, user };
}

const rows = [
  createData('Galaxy s9', 'galaxys9-y6k8', 'Monday Nov 12, 9:38am', 'Michael Thurman'),
  createData('iPhone X', 'iphonex-u1c9', 'Wednesday Nov 14, 4:21pm', 'Kyle Wheelhouse'),
  createData('iPad Mini 4th Gen', 'ipadmini4gen-x9b5', 'Tuesday Nov 6, 12:20pm', 'Michael Thurman'),
  createData('Nexus 4', 'nexus4-s4v3', 'Thursday Nov 15, 7:21am', 'Bryan Humpherys'),
  createData('iPhone 6+', 'iphone6plus-q0p8', 'Monday Nov 19, 5:13pm', 'Jacob West'),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Device</CustomTableCell>
            <CustomTableCell>Device ID</CustomTableCell>
            <CustomTableCell>Time</CustomTableCell>
            <CustomTableCell>User</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.device}
                </CustomTableCell>
                <CustomTableCell>{row.device_id}</CustomTableCell>
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