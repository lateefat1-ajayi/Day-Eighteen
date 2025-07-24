import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RiddlePage from './pages/RiddlePage';
import SubmitRiddle from './pages/SubmitRiddle';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/riddle" element={<RiddlePage />} />
        <Route path="/submit" element={<SubmitRiddle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
