import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("hello", username);
  //   console.log("user Password is", password);
  // }

  return (
    <div className="App">
      {/* <h1>Forms Tutorials</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          value={username}
          id="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          value={password}
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button>submit</button>
      </form> */}
      <Todo />
    </div>
  );
}

export default App;
