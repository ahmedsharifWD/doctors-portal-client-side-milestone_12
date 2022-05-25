import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Appointment from './Page/Appointment/Appointment';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import RequireAuth from './Page/Login/RequireAuth';
import SignUp from './Page/Login/SignUp';
import Navbar from './Page/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
