import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from "./pages/home-page/HomePage"
import MoviePage from "./pages/movie-page/MoviePage"
import TestPage from "./pages/test-page/TestPage"
import SigninPage from './pages/sign-in-page/SigninPage'
import SignupPage from './pages/sign-up-page/SignupPage'
import MoviesFiltersPage from './pages/movies-filters-page/MoviesFiltersPage'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from './components/context/UserContext'
import FullscreenSpinner from './shared/fullscreen-spinner/FullscreenSpinner'
import AuthPageGuard from './components/guards/AuthPageGuard'
import PublicPageGuard from './components/guards/PublicPageGuard'
import ProfileEditPage from './pages/profile-edit-page/ProfileEditPage'

function App() {
  const { setCurrentUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getProfile()
    setCurrentTheme()
  }, []) // mount

  // useEffect(() => {
  //   return () => {
  //     // unmount
  //   }
  // }, [])

  // useEffect(() => {
  //     // при изменении currentUser
  // }, [currentUser])

  function setCurrentTheme() {
    const theme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-bs-theme', theme || 'light')
  }

  async function getProfile() {
    try {
      setIsLoading(true)
      const accessToken = localStorage.getItem('accessToken')
      if (!accessToken) {
        return
      }

      const response = await axios.get('http://localhost:5000/auth/profile', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      if (response.status === 200 && response?.data?.data) {
        setCurrentUser(response.data.data)
      }
    }
    catch {

    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <HomePage />
          } />
          <Route path='/movie/:id' element={<MoviePage />} />
          <Route path='/sign-in' element={(
            <PublicPageGuard>
              <SigninPage />
            </PublicPageGuard>
          )} />
          <Route path='/sign-up' element={(
            <PublicPageGuard>
              <SignupPage />
            </PublicPageGuard>
          )} />
          <Route path="/movies" element={(
            <AuthPageGuard>
              <MoviesFiltersPage />
            </AuthPageGuard>
            )} />
          <Route path='/profile/edit' element={(
            <AuthPageGuard>
              <ProfileEditPage/>
            </AuthPageGuard>
          )} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </BrowserRouter>
      <FullscreenSpinner loading={isLoading} />
    </>
  )
}

export default App
