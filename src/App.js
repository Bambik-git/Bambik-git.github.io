import './App.css';
import Header from "./Components/Header/header.js";
import Navbar from "./Components/Navbar/navbar.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer.js";
import ProfileContainer from "./Components/Profile/ProfileContainer";



const App = (props) => {
   
  return ( // чтобы добавить еще один блочный тег на одинаковом уровне они должны быть обернуты в общий блочный тег выше уровнем
      <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
          <div className={'app-wrapper-content'}>
              <Routes>
                  <Route path="/profile/:userId?" element={<ProfileContainer />}/>
                  <Route exact path="/dialogs" element={<DialogsContainer />}/>
                  <Route exact path="/users" element={<UsersContainer />}/>
              </Routes>
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
