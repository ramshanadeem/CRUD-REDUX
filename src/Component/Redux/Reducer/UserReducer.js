const UserReducer =(state='', action)=>{
    // console.log("ss")
    
    switch (action.type) {
        case 'ADD_USER':
            // console.log("===========",state,"=uuuu=",action)
            //previous data add in new data 
            //previoud in ...state and new in action.payload

            return{
                ...state,
                items:[...state.items,action.payload]
            }

    //jo b user ay jo delete btn p click hu usko chor k baqi return krwado
    //jo b id mile usko hatakr baqi return krde wo 
            case 'Delete_USER':
                return{
                    ...state,
                    items: state.items.filter((user)=>user.id!=action.payload)
                }

                case 'USER_INFO':
                    let userDetail=state.items.filter((user)=>user.id==action.payload)
                    return{
                       ...state,
                        
                      user:(userDetail.length>0)?userDetail[0]:{} 
                    }
    default:
        return state
    }
    

}
export default UserReducer;


//3. create initial state also reducer take actions 
