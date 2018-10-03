import React from "react";

import Calendar from "./components/Calendar";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">work</span>
            <span>
              <b>Thread</b>
            </span>
          </div>

          <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Thread</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Interships <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Events</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Mentors</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Networing</a>
                </li>
              { /*
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <button class="dropdown-item" href="#">Action</button>
                    <button class="dropdown-item" href="#">Another action</button>
                    <button class="dropdown-item" href="#">Something else here</button>
                  </div>
                </li>
              */ } 
              </ul>
            </div>
            <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>

            </nav>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;