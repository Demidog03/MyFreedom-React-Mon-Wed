import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage/HomePage"
import MoviePage from "./pages/MoviePage/MoviePage"
import TestPage from "./pages/TestPage/TestPage"
import SigninPage from './pages/SigninPage/SigninPage'
import SignupPage from './pages/SignupPage/SignupPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movie/:id' element={<MoviePage/>} />
        <Route path='/sign-in' element={<SigninPage/>} />
        <Route path='/sign-up' element={<SignupPage/>} />
        <Route path='/test' element={<TestPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
