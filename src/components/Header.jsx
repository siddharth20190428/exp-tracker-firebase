import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../actions";

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(removeUser());
  };

  return (
    <header>
      <h1 className="logo">Expense Tracker</h1>
      <div className="info">
        {user ? (
          <>
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="avatar h-10 w-10 rounded-full"
                src={user.photoURL}
              />
            </div>
            <h4 className="username">{user.displayName}</h4>
            <button
              type="submit"
              className="w-full bg-red-600 border border-transparent rounded-md py-2 px-1 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={signOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
}

export default Header;
