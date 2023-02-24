import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Pages/Home' ;
import Elektronika from './Pages/Lists/Elektronika';
import './style/app.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/elektronika' element={<Elektronika/>}/>
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
