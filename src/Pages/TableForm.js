import * as React from 'react';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { useSelector } from 'react-redux';
import List from './List'
// const UserList=[{id:1, email:"test",password:"xjxj"}]

const rows = [
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const TableForm = () => {
  const UserList = [useSelector((state) => {
    return state.user.items;
  })]
  // console.log(UserList[0])

  return (

    <div style={{ padding: "40px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UserList[0].map((userData) => (
              <List user={userData} key={userData.id}/>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


export default TableForm;