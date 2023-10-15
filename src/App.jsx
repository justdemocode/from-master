import "./App.css";
import RefFrom from "./Components/RefFrom/RefFrom";
// import SimpleFrom from "./Components/SipmleFrom/SimpleFrom";
// import StateFromFull from "./Components/StateFromFull/StateFromFull";

function App() {
  return (
    <div className="my-4 container mx-auto">
      {/* <div>
        <h1 className="text-center text-6xl font-bold text-red-700">
          SimpleFrom
        </h1>
        <SimpleFrom />
      </div> */}
      {/* <div>
        <h1 className="text-center text-6xl font-bold text-red-700">
          StateFromFull
        </h1>
        <StateFromFull />
      </div> */}
      <div>
        <h1 className="text-center text-6xl font-bold text-red-700">
          RefFrom
        </h1>
        <RefFrom/>
      </div>
    </div>
  );
}

export default App;
