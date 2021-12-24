const setUser = (user) => {
  return { type: "SET__USER", payload: user };
};

const removeUser = () => {
  return { type: "REMOVE__USER" };
};

export { setUser, removeUser };
