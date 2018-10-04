import React from "react";
import Calendar from "./components/Calendar";

import "./App.css";
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <header>
            <div id="logo">
              <span className="icon">work</span>
              <span>
                <b>Thread</b>
              </span>
            </div>
            <Navigation />

            </header>
          <main>
            <Calendar />
          </main>
        </div>
      </div>
    );
  }
}

export default App;