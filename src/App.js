import './App.css';
import Header from "./Components/Header/header.js";
import Navbar from "./Components/Navbar/navbar.js";
import Profile from "./Components/Profile/profile.js";
const App = () => {
  return ( // чтобы добавить еще один блочный тег на одинаковом уровне они должны быть обернуты в общий блочный тег выше уровнем
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
        <Profile />
      </div>
  );
}

export default App;
