import './App.css';
import Header from './Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import './assets/home/background-home-desktop.jpg';
import Destination from './Destination/Destination';
import Crew from './Crew/Crew';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/crew' element={<Crew />} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;