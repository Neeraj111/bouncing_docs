import React from "react";
import Background from "./components/background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div className="bg-zinc-900 h-screen w-full relative">
      <Background/>
      <Foreground/>

    </div>
  );
}

export default App;
