import { useNavigate } from 'react-router'
import classes from './BackButton.module.css'
import { Button } from 'react-bootstrap'

function BackButton({ to }) {
    const navigate = useNavigate()

    function goBack() {
        navigate(to || '/')
    }

    return (
        <Button onClick={goBack} size="sm" variant='secondary' className={classes.backButton}>
            Back
        </Button>
    )
}

export default BackButton
