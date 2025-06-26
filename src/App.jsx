// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
// import { useEffect, useState } from "react";
// import Navbar from "./components/Navabr/Navbar";

import Tic from "./components/TicTacToe/Tic"

// function App() {
//   const [name, setName] = useState("");
//   const dispatch = useDispatch();

//   const storeData = useSelector((a) => a);

//   useEffect(() => {
//     console.log(storeData);
//   }, [storeData]);

//   return (
//     <>
//       <Navbar name={storeData.name}></Navbar>
//       <h1>Hello World</h1>
//       <h1>Count : {storeData.count}</h1>
//       <button
//         onClick={() => {
//           dispatch({ type: "INCREMENT" });
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "DECREMENT" });
//         }}
//       >
//         Decrement
//       </button>

//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           dispatch({ type: "UPDATE_NAME", payload: name });
//         }}
//       >
//         Submit
//       </button>

//       <h1>From Store : {storeData.name} </h1>
//     </>
//   );
// }

// export default App;


const App = () => {
  return (

    <div>
      <Tic></Tic>
    </div>
  )
}

export default App
