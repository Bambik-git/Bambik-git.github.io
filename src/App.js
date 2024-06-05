import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React, {lazy} from "react";
import UsersContainer from "./Components/Users/UsersContainer.js";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import PageNotFound from "./Components/404/PageNotFound";
import Main from "./Components/Main/main";
import Preloader from "./Components/common/Preloader/preloader";
import store from "./redux/redux_store";


//Ленивая загрузка компонент
const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./Components/Profile/ProfileContainer'));


const App = () => {
    return (
        <BrowserRouter>
                <HeaderContainer/>
                {store.getState().auth.isAuth && <Navigate to={'/profile'}/> }
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>
                            {/*<Route exact path="/" element={<Navigate to="/profile" />} />*/}
                            {/*<Route path="/dialogs" element={<DialogsContainer/>}/>*/}
                            <Route exact path="/" element={<Main/>} />
                            <Route exact path="/login" element={<Login/>}/>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                            <Route exact path="/users" element={<UsersContainer/>}/>
                            <Route exact path="*" element={<PageNotFound/>}/>
                        </Routes>
                    </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
