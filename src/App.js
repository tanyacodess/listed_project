import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MainPage from './Pages/MainPage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LoginFormm from './Loginpage';


function App() {
  return (
    <>
    <BrowserRouter >

      <Routes>

        <Route path='/' element={<LoginFormm/>} />
        <Route path='/dashboard' element={<MainPage/>} />

      </Routes>

    </BrowserRouter>
  </>
  );
}

export default App;
