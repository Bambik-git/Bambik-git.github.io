import './App.css';
import Header from "./Components/Header/header.js";
import Navbar from "./Components/Navbar/navbar.js";
import Profile from "./Components/Profile/profile.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";



const App = (props) => {
   
  return ( // чтобы добавить еще один блочный тег на одинаковом уровне они должны быть обернуты в общий блочный тег выше уровнем
      <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
          <div className={'app-wrapper-content'}>
              <Routes>
                  <Route path="/profile" element={<Profile store={props.store} />}/>
                  <Route exact path="/dialogs" element={<DialogsContainer store={props.store}/>}/>
              </Routes>
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
