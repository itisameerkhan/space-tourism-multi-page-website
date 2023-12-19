import './App.css';
import Header from './Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;