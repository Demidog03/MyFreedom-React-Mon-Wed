import { Container, Row, Col, Pagination, Spinner } from 'react-bootstrap'
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar'
import classes from './HomePage.module.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

function HomePage() {
    const [params, setParams] = useSearchParams()
    const [popularMovies, setPopularMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(+params.get('page') || 1)
    const [loading, setLoading] = useState(false)
    
    console.log(params)

    useEffect(() => {
        fetchPopularMovies(currentPage)
    }, [currentPage])

    async function fetchPopularMovies(page) {
        try {
            setLoading(true)
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}`, {
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            })
            if (response?.data?.results?.length > 0) {
                setPopularMovies(response.data.results)
            }
        }
        catch (err) {
            console.error(err)
        }
        finally {
            setLoading(false)
        }
    }

    function changePage(i) {
        setCurrentPage(i)
        setParams({ page: i })
    }

    let items = [];
    for (let i = 1; i <= 10; i++) {
        items.push(
            <Pagination.Item key={i} onClick={() => changePage(i)} active={i === currentPage}>
                {i}
            </Pagination.Item>,
        );
    }

    return (
        <>
            <CustomNavbar />
            <Container fluid="xl" className={classes.cardContainer}>
                <h1 className='mb-4'>Popular Movies</h1>
                {loading
                    ? (
                        <div className={classes.spinnerContainer}>
                            <Spinner className={classes.spinner} animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )
                    : (
                        <Row xs={1} sm={2} md={3} lg={3} xl={4} className="g-2">
                            {popularMovies.map((movie, idx) => (
                                <Col key={idx}>
                                    <MovieCard
                                        id={movie.id}
                                        description={movie.overview}
                                        title={movie.original_title}
                                        image={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                                        language={movie.original_language}
                                        rating={movie.vote_average}
                                        releaseDate={movie.release_date}
                                    />
                                </Col>
                            ))}
                        </Row>
                    )
                }
                <Pagination className='mt-4'>{items}</Pagination>
            </Container>
        </>
    )
}

export default HomePage
