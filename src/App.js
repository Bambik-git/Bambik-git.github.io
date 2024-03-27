import './App.css';
import Header from "./Components/Header/header.js";
import Navbar from "./Components/Navbar/navbar.js";
import Profile from "./Components/Profile/profile.js";
import Dialogs from "./Components/Dialogs/dialogs";
const App = () => {
  return ( // чтобы добавить еще один блочный тег на одинаковом уровне они должны быть обернуты в общий блочный тег выше уровнем
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
          <div className={'app-wrapper-content'}>
              {/*<Profile />*/}
              <Dialogs />
          </div>
      </div>
  );
}

export default App;
