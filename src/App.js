import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserData from './UserData';


function App() {
  return (
    <div className="App">
      <Header/>
      <UserData/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
