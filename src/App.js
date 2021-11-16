import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./components/Header";
import Days from "./components/Days"
import Location from "./components/Location";
import LocationControl from "./components/LocationControl";

function App() {
  return (
    <React.Fragment>
      <div className="App">
          <div className="row">
            <div className="col">
              <div className="box">
                <Header />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="box">
              <Days />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="box"><LocationControl />
              {/* <div className="box"><Location /> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="box"><Location />
              {/* <div className="box">Footer */}
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
