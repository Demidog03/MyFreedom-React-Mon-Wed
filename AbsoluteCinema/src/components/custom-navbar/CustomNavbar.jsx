import { useContext } from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContext';
import { MoonStarsFillIcon, PersonCircleIcon } from '../../shared/Icons';
import classes from './CustomNavbar.module.css'

function CustomNavbar() {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const navigate = useNavigate()

  function goToSigninPage() {
    navigate('/sign-in')
  }

  function logoutUser() {
    localStorage.removeItem('accessToken')
    setCurrentUser(undefined)
  }

  function goToMainPage() {
    navigate('/')
  }

  function goToMoviesPage() {
    navigate('/movies')
  }

  function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || document.querySelector('html').getAttribute('data-bs-theme')
    document.querySelector('html').setAttribute('data-bs-theme', currentTheme === 'dark' ? 'light' : 'dark')
    localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark')
  }

  function goToProfileEditPage() {
    navigate('/profile/edit')
  }

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container fluid="xl">
        <Navbar.Brand onClick={goToMainPage} >Absolute Cinema</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={goToMoviesPage}>Movies</Nav.Link>
          </Nav>
          <Form className={classes.buttonsContainer}>
            <div className={classes.themeIcon} onClick={toggleTheme}><MoonStarsFillIcon/></div>
            {currentUser && <div onClick={goToProfileEditPage} className={classes.profileIcon}><PersonCircleIcon/></div>}
            {!currentUser && <Button onClick={goToSigninPage} variant="outline-success">Sign-in</Button>}
            {currentUser && <Button onClick={logoutUser} variant="outline-dark">Logout</Button>}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
