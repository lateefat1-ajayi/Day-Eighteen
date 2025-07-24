import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RiddlePage from './pages/RiddlePage';
import SubmitRiddle from './pages/SubmitRiddle';
import BrowseRiddles from './pages/BrowseRiddles';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/riddle" element={<RiddlePage />} />
        <Route path="/submit" element={<SubmitRiddle />} />
        <Route path="/browse" element={<BrowseRiddles />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
