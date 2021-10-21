import React from 'react'
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { deleteUser, updateUser } from '../Component/Redux/AllAction';
import { Link, NavLink } from 'react-router-dom';
import EditUser from './EditUser';
import { useHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import { DeleteUser, Update } from '../Component/Redux/AllAction';
function List({ user }) {
    const dispatch = useDispatch()
    const history=useHistory()
    console.log({ user })
   const handlesubmit=()=>
   {
      history.push(`/edit-user/${id}`)
   }
    const { email, password,id } = user
    return (

        <div>


            <TableRow>
                <TableCell>{email}</TableCell>
                <TableCell>{password}</TableCell>
                <Button onClick={() => dispatch(deleteUser(id))}>Delete</Button>
               
                <NavLink exact className="link" to={`/edit-user/${id}`}>   <Button onClick={handlesubmit}>EDIT</Button></NavLink>
        
            </TableRow>
            
        </div>
    )
}

export default List
