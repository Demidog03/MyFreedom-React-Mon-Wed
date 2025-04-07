import { Container } from 'react-bootstrap'
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar'
import classes from './HomePage.module.css'
import MovieCard from '../../components/MovieCard/MovieCard'

function HomePage() {
    return (
        <>
            <CustomNavbar/>
            <Container fluid="xl">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </Container>
        </>
    )
}

export default HomePage
