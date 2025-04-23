import { Button, Form, InputGroup } from "react-bootstrap"
import classes from './MovieSearchInput.module.css'
import { useSearchParams } from "react-router"
import { debounce } from "../../shared/utils"

function MovieSearchInput() {
    const [searchParams, setSearchParams] = useSearchParams()

    const debouncedChangeSearchInput = debounce(changeSearchInput, 500)

    function changeSearchInput(event) {
        searchParams.set('query', event.target.value)
        searchParams.delete('with_genres') // убираем genre
        setSearchParams(searchParams)
    }

    return (
        <InputGroup className={classes.inputGroup}>
            <Form.Control
                defaultValue={searchParams.get('query') || ''}
                onChange={debouncedChangeSearchInput}
                placeholder="Search movies"
                aria-label="Search movies"
                aria-describedby="search-movie-btn"
            />
        </InputGroup>
    )
}

export default MovieSearchInput
