import {createStore,combineReducers} from 'redux'
import UserReducer from "./Reducer/UserReducer";
import StudentReducer from "./Reducer/StudentReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
const mainReducer=combineReducers({
    user:UserReducer,
    StudentReducer:StudentReducer
})
const commonData = {
    user:{
     items:[
         {
        id:1, email:"ramsha@gg", password:'1233', 
     },
     {
        id:2, email:"ramsha@gg", password:'1233', 
     },
     {
       id:3,  email:"ramsha@gg", password:'1233', 
     }
     ],
    //  StudentReducer:{
    //      studentId:"3",
    //      marks:"90"
    //  }
 }
}
const store = createStore(mainReducer,commonData, composeWithDevTools())
export default store;