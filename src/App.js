import { useState } from "react";
import "./App.css";

function App() {
  const [value, setvalue] = useState(" ");
  const calculate = () => {
    try {
      setvalue(eval(value).toString());
    } catch (error) {}
  };

  return (
    <div className="Container bg-blue-200 w-full h-[100vh] flex justify-center items-center flex-col">
      <div className="font-extrabold text-3xl m-4">Calculator</div>
      <div className="calculator bg-slate-600 w-80 h-96">
        <div className="display flex justify-center items-center mt-2 ">
          <input
            className="text-right cursor-pointer p-4 px-10"
            type="text"
            value={value}
            n
          />
        </div>
        <div className="first flex items-center justify-between mx-3 my-4">
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg "
            onClick={(e) => setvalue(value + e.target.value)}
            value={9}
          >
            9
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={8}
          >
            8
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={7}
          >
            7
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={"/"}
          >
            /
          </button>
        </div>

        <div className="first flex items-center justify-between mx-3 my-4">
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={6}
          >
            6
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={5}
          >
            5
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={4}
          >
            4
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={"*"}
          >
            *
          </button>
        </div>

        <div className="first flex items-center justify-between mx-3 my-4">
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg "
            onClick={(e) => setvalue(value + e.target.value)}
            value={3}
          >
            3
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={2}
          >
            2
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={1}
          >
            1
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={"-"}
          >
            -
          </button>
        </div>

        <div className="first flex items-center justify-between mx-3 my-4">
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue("")}
            value={9}
          >
            AC
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={0}
          >
            0
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={calculate}
            value={"="}
          >
            =
          </button>
          <button
            className="btn h-[60px] w-[60px] border text-white bg-fuchsia-950 font-extrabold text-lg"
            onClick={(e) => setvalue(value + e.target.value)}
            value={"+"}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
