// import "./App.css";

import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap bottom-10 px-2 py-2 justify-center inset-x-0 ">
          <div className="flex flex-wrap justify-center px-1 py-1 rounded-3xl bg-white gap-1">
            <button
              className="border-2 rounded-3xl px-2 py-1 justify-center text-white bg-red-600 "
              onClick={() => setColor("red")}
            >
              red
            </button>
            <button
              className="border-2 rounded-3xl px-2 py-1 justify-center text-white bg-green-600 "
              onClick={() => setColor("green")}
            >
              green
            </button>
            <button
              className="border-2 rounded-3xl px-2 py-1 justify-center text-white bg-blue-600 "
              onClick={() => setColor("blue")}
            >
              blue
            </button>
            <button
              className="border-2 rounded-3xl px-2 py-1 justify-center text-white bg-yellow-400 "
              onClick={() => setColor("yellow")}
            >
              yellow
            </button>
            <button
              className="border-2 rounded-3xl px-2 py-1 justify-center text-white bg-black "
              onClick={() => setColor("black")}
            >
              black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
