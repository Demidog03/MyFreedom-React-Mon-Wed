import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from "./pages/home-page/HomePage"
import MoviePage from "./pages/movie-page/MoviePage"
import TestPage from "./pages/test-page/TestPage"
import SigninPage from './pages/sign-in-page/SigninPage'
import SignupPage from './pages/sign-up-page/SignupPage'
import MoviesFiltersPage from './pages/movies-filters-page/MoviesFiltersPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movie/:id' element={<MoviePage/>} />
        <Route path='/sign-in' element={<SigninPage/>} />
        <Route path='/sign-up' element={<SignupPage/>} />
        <Route path="/movies" element={<MoviesFiltersPage/> }/>
        <Route path='/test' element={<TestPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
