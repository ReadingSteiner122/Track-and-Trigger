export const reducer = (state = {user:"Shaurya ki jai"}, action) => {
    console.log(action.payload);
  
    switch (action.type) {
      case "GET_USER":
        return {...state, errMess: null, user: action.payload};
  
      default:
        return state;
    }
  };