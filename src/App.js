import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav-bar/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/dialogs";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <Nav />

          <div className="app-wrapper-content">
            <Routes>

              <Route path='/dialogs' Component={Dialogs} />
              <Route path='/profile' Component={Profile} />
              <Route path='/news' Component={News} />
              <Route path='/music' Component={Music} />
              <Route path='/settings' Component={Settings} />
              
            </Routes>
          </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
