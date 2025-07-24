import { Paper, TextField, Typography } from '@mui/material';
import CreateAccount from './CreateAccount';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<CreateAccount />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
