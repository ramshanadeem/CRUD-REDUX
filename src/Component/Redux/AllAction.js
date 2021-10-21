export const userRegister=(data)=>{
    return{
        type:'ADD_USER',
        payload:data

    }
}
  export const userInfo =(id)=>{
     return{
         type:'USER_INFO',
         payload:id

     }
 }
export const deleteUser=(id)=>{
    return{
        type:'Delete_USER',
        payload:id

    }
}

export const updateUser=(data)=>{
    return{
        type:'Update_User',
        payload:data

    }
}