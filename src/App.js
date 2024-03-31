import './App.css';
import Header from "./Components/Header/header.js";
import Navbar from "./Components/Navbar/navbar.js";
import Profile from "./Components/Profile/profile.js";
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return ( // чтобы добавить еще один блочный тег на одинаковом уровне они должны быть обернуты в общий блочный тег выше уровнем
      <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
          <div className={'app-wrapper-content'}>
              <Routes>
                  <Route path="/profile" element={<Profile />}/>
                  <Route exact path="/dialogs" element={<Dialogs />}/>
              </Routes>
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
