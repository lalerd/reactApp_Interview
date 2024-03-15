import './App.css';
import Users from './Users';
import Detay from './Detay'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
   
    <div className='App'>
    <Routes>
    <Route extends path='/' element={<Users />} />
    <Route path='/detay' element={<Detay />} />
    </Routes>
    </div>

    </Router>
  );
}

export default App;
