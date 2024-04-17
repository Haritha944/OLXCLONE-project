import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Details from './components/Details';


function App() {
  return (
    
    <>
    <Routes>
    <Route>
      <Route path='/' element={<Main />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/details' element={<Details/>}/>

    </Route>
    </Routes>
    </>
   
  );
}

export default App;
