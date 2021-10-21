// import React from 'react'
// import { Button, Container, Grid } from "@material-ui/core";
// import { useState } from "react";
// import BasicTextFields from "./../Component/BasicFields";
// import shortid from 'shortid';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
// import { userInfo } from '../Component/Redux/AllAction';
import React,{Component } from "react";
import {connect} from 'react-redux'
import { Button, Container, Grid } from "@material-ui/core";
import { useState } from "react";
import BasicTextFields from "../Component/BasicFields";
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { userInfo } from "../Component/Redux/AllAction";

class EditUser extends Component {

    constructor(props)
        {
            super(props)
            this.state={
              email:'',
              password:''
            }
        }
        componentDidMount(){
            this.props.getUserDetail(this.props.match.params.id)
    console.log(this.props,this.props.match.params.id)
        }
        componentDidUpdate()
        {
    
        }
        inputHandler=(e)=>{
            this.setState({[e.target.email]:e.target.value})
        }
         submitButton=async()=>{
    
        }
    render() {
        const {email,password}=this.state
        const redirect=this.state
      return (
        <div>
        
       
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
      value={email}
      Change={this.inputHandler}
    />
    <BasicTextFields
      id="paswrd"
//       label="Password"
      type="password"
      value={password}
      Change={this.inputHandler}
    />
 
              <Button onClick={this.submitButton} variant="contained">Submit</Button>

  </form>
</Grid>

</Grid>
   
         
        </div>
      );
    }
  }
  const mapStateToProps=(state)=>{
        return{
            myUser:state.user
        }
    }
    const mapToDispatch=(dispatch)=>{
        return{
             getUserDetail:(id)=>{
                 dispatch(userInfo(id))
             }
        }
    }
  export default connect(mapStateToProps,mapToDispatch)(EditUser);
//   function EditUser({ user }) {
//     const [header, setHeader] =useState({
//             email: '',
//             password: '',
            
          
//           });
//     const dispatch = useDispatch()
//     const history=useHistory()
//     console.log({ user })
//    const handleSubmit=()=>
//    {
//     Object.assign(header,{id:shortid.generate()})
//     console.log(header)
//     dispatch(userInfo(id))
//    }
//     const { email, password,id } = user
  

  
//   return (
//     <>
   
//     <Grid  container spacing={12}>

    
      
//       <Grid container spacing={2} item md={8} lg={6} xs={12}>
//         <form
//           style={{
//             textAlign: "center",
//             width: "500px",
//             marginLeft: "20%",
//             marginTop: "15%",
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "inherit",
//               color: "gray",
//               textAlign: "left",
//               fontSize: "150%",
//             }}
//           >
//             Log In
//           </p>
//           <p style={{ color: "grey", textAlign: "left" }}>
//             Welcome back, please login to your account.
//           </p>
//           <BasicTextFields
//             id="email"
//             type="email"
//             label="Email"
//             autoComplete={true}
//             value={email}
           
//             Change={(e) => setHeader({...header, email: e.target.value })}
//           />
//           <BasicTextFields
//             id="paswrd"
//             label="Password"
//             type="password"
//             value={password}
           
//             Change={(e) => setHeader({...header, password: e.target.value })}
//           />
       
//                     <Button onClick={handleSubmit} variant="contained">Submit</Button>
      
//         </form>
//       </Grid>

//     </Grid>
   
//     </>
//   );
// }

// // export default EditUser;