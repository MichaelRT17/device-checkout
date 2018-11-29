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
function createData(device, time, user) {
    id += 1;
    return { id, device, time, user };
}

const rows = [
    createData('Galaxy s9', 'Monday Nov 12, 9:38am', 'Michael Thurman'),
    createData('iPhone X', 'Wednesday Nov 14, 4:21pm', 'Kyle Wheelhouse'),
    createData('iPad Mini 4th Gen', 'Tuesday Nov 6, 12:20pm', 'Michael Thurman'),
    createData('Nexus 4', 'Thursday Nov 15, 7:21am', 'Bryan Humpherys'),
    createData('iPhone 6+', 'Monday Nov 19, 5:13pm', 'Jacob West'),
  ];
  
  function CustomizedTable(props) {
    const { classes } = props;
  
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Device</CustomTableCell>
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