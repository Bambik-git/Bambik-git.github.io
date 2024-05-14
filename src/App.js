import './App.css';
import Navbar from "./Components/Navbar/navbar.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {lazy} from "react";
import UsersContainer from "./Components/Users/UsersContainer.js";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

//React.lazy
const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./Components/Profile/ProfileContainer'));

const App = () => {

    return ( // чтобы добавить еще один блочный тег на одинаковом уровне они должны быть обернуты в общий блочный тег выше уровнем
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route exact path="/users" element={<UsersContainer/>}/>
                            <Route exact path="/login" element={<Login/>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
