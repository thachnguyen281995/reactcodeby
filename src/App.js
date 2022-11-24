import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import ForgetPassword from './pages/ForgetPassword';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
