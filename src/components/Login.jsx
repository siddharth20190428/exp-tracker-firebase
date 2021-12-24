import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../actions";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser(result.user));
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="container">
      <div className="illustration">
        <img src="https://images-ext-1.discordapp.net/external/wqAiakysToBEmJKhljDIPURyhdUHx9wOMrifAgmVgiU/https/cdni.iconscout.com/illustration/premium/thumb/financial-and-budget-planning-on-the-web-using-statistics-3105375-2600055.png" />
      </div>
      <div className="login">
        <h1>Track your expenses like never before</h1>
        <p className="hero-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          assumenda excepturi officiis consectetur suscipit, ullam ipsum
          laborum. Repudiandae animi quibusdam voluptatem nam quod est commodi
          quam! Illo tempore minus culpa ipsum neque ducimus assumenda,
          aspernatur doloremque tempora ad, earum cum quae eligendi ipsam
          debitis, optio officiis deleniti odio. Corrupti, animi.
        </p>
        <button
          className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={signIn}
        >
          <span> Log In with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
