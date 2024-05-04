
const reducer=(state,action)=>{
    switch (action.type) {
      case "mosbat":
      {
        return state+action.payload;
      }
      case "manfi":
      {
        return state-action.payload;
      }
    
      default:
       return state;
    }
  
  }

  export default reducer;