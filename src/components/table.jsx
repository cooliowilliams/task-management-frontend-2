import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, tasktitle, taskdescription, deadline, Status) {
  return { name, tasktitle, taskdescription, deadline, Status };
}

const rows = [
  createData('Fix broken link', 'code attached', '23/3/2024', 'pending'),
  createData('Google form assesment', 'practice question', '23/3/2024', 'pending'),
 
];

export default function TaskTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task Title </TableCell>
            <TableCell align="right">Task Description</TableCell>
            <TableCell align="right">Deadline</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.tasktitle}</TableCell>
              <TableCell align="right">{row.taskdescription}</TableCell>
              <TableCell align="right">{row.deadline}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
