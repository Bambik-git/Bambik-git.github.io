import './App.css';
import Header from "./Components/header";
import Navbar from "./Components/navbar";
import Profile from "./Components/profile";
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
