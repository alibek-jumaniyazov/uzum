import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Pages/Home' ;
import Aksesuar from './Pages/Lists/Asesuar';
import Avtotolovlar from './Pages/Lists/Avtotolov';
import Bolalar from './Pages/Lists/Bolalar';
import Elektronika from './Pages/Lists/Elektronika';
import Gozallik from './Pages/Lists/Go\'zallik';
import Kiyim from './Pages/Lists/Kiyim';
import Poyabzallar from './Pages/Lists/Poyabzallar';
import Qurilish from './Pages/Lists/Qurilish';
import Salomatlik from './Pages/Lists/Salomatlik';
import Texnika from './Pages/Lists/Texnika';
import Uy from './Pages/Lists/Uy';
import './style/app.css'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Navbar/>
        <div className="containerr  ">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/elektronika' element={<Elektronika/>}/>
            <Route path='/texnika' element={<Texnika/>}/>
            <Route path='/aksesuarlar' element={<Aksesuar/>}/>
            <Route path='/avtotolovlarr' element={<Avtotolovlar/>}/>
            <Route path='/bolalar' element={<Bolalar/>}/>
            <Route path='/goʻzallik' element={<Gozallik/>}/>
            <Route path='/kiyim' element={<Kiyim/>}/>
            <Route path='/poyabzallar' element={<Poyabzallar/>}/>
            <Route path='/qurilish' element={<Qurilish/>}/>
            <Route path='/salomatlik' element={<Salomatlik/>}/>
            <Route path='/uy' element={<Uy/>}/>
          </Routes>
        </div>
        <Footer/>
    </div>
    </ChakraProvider>
  );
}

export default App;
