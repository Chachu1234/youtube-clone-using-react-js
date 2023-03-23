import React from "react";
import LeftSide from "./component/leftSide";

import Navbar from "./component/navbar";

const App = () => {
  return (
    <div className=" bg-gray-50 ">
      <Navbar />
      <div>
        <LeftSide />
      </div>
    </div>
  );
};

export default App;
