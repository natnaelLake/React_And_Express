import logo from './logo.svg';
import './App.css';
import './components/config/style.css'
import Signup from './components/AuthPage/Signup';
import Login from './components/AuthPage/Login';
import Home from './components/mainPages/Home';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import User from './components/mainPages/User';
// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route  exatc path='/login' element = {<Login/>} />
              <Route  exatc path='/signup' element = {<Signup/>} />
              <Route  exatc path='/' element = {<Home/>} />
              <Route  exatc path='/users' element = {<User/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
