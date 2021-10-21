import React from 'react'
import { Button, Container, Grid } from "@material-ui/core";
import { useState } from "react";
import BasicTextFields from "./BasicFields";
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { userRegister } from './Redux/AllAction';
import { useHistory } from 'react-router';

function SignUp() {
     const dispatch = useDispatch()
     const history=useHistory()
  const [header, setHeader] =useState({
    email: '',
    password: '',
  
  });


  const handleSubmit = async() => {
    history.push('/Tableform')
    Object.assign(header,{id:shortid.generate()})
    console.log(header)
    dispatch(userRegister(header))
   
    
  
  };
  return (
    <>
   
    <Grid  container spacing={12}>

    
      
      <Grid container spacing={2} item md={8} lg={6} xs={12}>
        <form
          style={{
            textAlign: "center",
            width: "500px",
            marginLeft: "20%",
            marginTop: "15%",
          }}
        >
          <p
            style={{
              fontFamily: "inherit",
              color: "gray",
              textAlign: "left",
              fontSize: "150%",
            }}
          >
            Log In
          </p>
          <p style={{ color: "grey", textAlign: "left" }}>
            Welcome back, please login to your account.
          </p>
          <BasicTextFields
            id="email"
            type="email"
            label="Email"
            autoComplete={true}
            value={header.email}
            Change={(e) => setHeader({...header, email: e.target.value })}
          />
          <BasicTextFields
            id="paswrd"
            label="Password"
            type="password"
            value={header.password}
            Change={(e) => setHeader({...header, password: e.target.value })}
          />
       
                    <Button onClick={handleSubmit} variant="contained">Submit</Button>
      
        </form>
      </Grid>

    </Grid>
   
    </>
  );
}

export default SignUp;
