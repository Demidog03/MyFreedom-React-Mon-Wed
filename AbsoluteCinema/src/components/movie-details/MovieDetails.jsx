import { Badge, Button, Container, Stack } from 'react-bootstrap'
import classes from './MovieDetails.module.css'
import { useNavigate, useSearchParams } from 'react-router'

function MovieDetails({
    title,
    description,
    tagline,
    homepage,
    originalLanguage,
    releaseDate,
    averageVote,
    status,
    image,
    genres
}) {
    const [params] = useSearchParams()
    const navigate = useNavigate()

    function goToHomePage() {
        navigate(`/?page=${params.get('backPage')}`)
    }

    return (
        <Container fluid="xl">
            <Button onClick={goToHomePage} className={classes.backBtn} size="sm" variant="secondary">Back</Button>
            <div className={classes.movieContainer}>
                <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
                <div className={classes.movieDetails}>
                    <div className='mb-2'>
                        <Stack direction='horizontal' gap={1}>
                            {genres.map(genre => (
                                <Badge pill bg="info">
                                    {genre.name}
                                </Badge>
                            ))}
                        </Stack>
                    </div>
                    <h1>{title}</h1>
                    <h2>{tagline}</h2>
                    <p>{description}</p>
                    <p className={classes.homepage}><b>Homepage:</b> <Button href={homepage} target='_blank' className={classes.homepageLink} variant='link'>{homepage}</Button></p>
                    <p><b>Original language:</b> <Badge bg="dark" className={classes.originalLanguage}>{originalLanguage}</Badge></p>
                    <p><b>Release date:</b> {releaseDate}</p>
                    <p><b>Vote Average:</b> {averageVote?.toFixed(1)}/10</p>
                    <p className={classes.status}><b>Status:</b> <Badge pill bg="success">{status}</Badge> </p>
                </div>
            </div>
        </Container>
    )
}

export default MovieDetails
