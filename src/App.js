import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Welcome/>} />
      </Routes>
    </div>
  );
}

export default App;
