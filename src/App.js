import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import Formm from './components/Formm';
import { Data } from './Data';



function App() {
  return (
    
 <><Data>
   <Routes>
    <Route path='/' element={   <Home/>}></Route>
    <Route path='/reservation' element={   <BookingForm/>}></Route>
    <Route path='/login' element={   <Formm/>}></Route>

   </Routes>
  </Data>
   </>
  
  
  );
}

export default App;
