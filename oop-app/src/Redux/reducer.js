export const reducer = (state = {username:"Shaurya ki jai"}, action) => {
    console.log(action.payload);
  
    switch (action.type) {
      case "GET_USER":
        return action.payload || false;
  
      default:
        return state;
    }
  };