import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
    <ToastContainer position="bottom-right" autoClose={3000} />
      <BrowserRouter basename="/portfolio">
        <NavBar/>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App