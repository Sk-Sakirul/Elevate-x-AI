import React from "react";
import { useState } from "react";
import TodoList from "./pages/TodoList";
import UserDirectoryApp from "./pages/UserDirectoryApp";
import FormTracker from "./pages/FormTracker";

const App = () => {
  // const [isActive, setIsActive] = useState(true);
  // let arr = ["one", "two", "three", "four"];
  return (
    // <div>
    //   <button onClick={() => setIsActive((prev) => !prev)}>
    //     {isActive ? "Hide the elements" : "Show the elements"}
    //   </button>
    //   {/* <ul>
    //     {isActive &&
    //       arr.map((ele, i) => {
    //         if (i % 2 !== 0) {
    //           return <li style={{ color: "red" }}>{ele}</li>;
    //         } else {
    //           return <li>{ele}</li>;
    //         }
    //       })}
    //   </ul> */}

    //   <ul>
    //     {isActive && arr.map((ele, i) => (
    //         <li style={i%2 !== 0 ? { color: "red" } : {color : "black"}}>{ele}</li>
    //     ))}
    //   </ul>
    // </div>

    <div>
      {/* question-1 */}
      {/* <TodoList /> */}

      {/* question-2 */}
      {/* <UserDirectoryApp /> */}

      {/* question-3 */}
      <FormTracker />
    </div>
  );
};

export default App;
