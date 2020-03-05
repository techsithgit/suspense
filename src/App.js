import React, { Suspense } from "react";
import Loader from "./suspense/loader";

//comment added 

//npm run build
import "./App.css";

const Tag = React.lazy(() => import("./suspense/Tag"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loader />}>
          <Tag val={"hello"} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;

//suspense for data fetching is a new feature ,  so wait for data
// it could be image , script, any assettts. 
//https://codesandbox.io/s/fragrant-glade-8huj6