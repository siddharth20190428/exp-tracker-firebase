import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <>
          {/* <Home /> */}
          <p>hello</p>
        </>
      )}
    </div>
  );
}

export default App;
