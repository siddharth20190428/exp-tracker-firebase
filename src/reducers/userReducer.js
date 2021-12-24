let localUser = localStorage.getItem("user");

const initialState = localUser != "undefined" ? JSON.parse(localUser) : null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET__USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    case "REMOVE__USER":
      localStorage.removeItem("user");
      return null;

    default:
      return state;
  }
};

export default userReducer;
