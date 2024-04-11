import './App.css';
import Header from "./Components/Header/header.js";
import Navbar from "./Components/Navbar/navbar.js";
import Profile from "./Components/Profile/profile.js";
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";



const App = (props) => {
   
  return ( // чтобы добавить еще один блочный тег на одинаковом уровне они должны быть обернуты в общий блочный тег выше уровнем
      <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
          <div className={'app-wrapper-content'}>
              <Routes>
                  <Route path="/profile" element={<Profile posts_data={props.state.profilePage}
                                                           addPost={props.addPost}
                                                           updateNewPost={props.updateNewPost}/>}/>
                  <Route exact path="/dialogs" element={<Dialogs dialogs_data={props.state.dialogsPage.dialogsData}
                                                                 message_data={props.state.dialogsPage.messagesData}/>}/>
              </Routes>
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
