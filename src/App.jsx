import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/Home' ;
import './style/app.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
