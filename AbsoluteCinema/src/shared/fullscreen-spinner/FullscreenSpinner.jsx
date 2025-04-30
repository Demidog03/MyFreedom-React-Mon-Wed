import { Spinner } from 'react-bootstrap'
import classes from './FullscreenSpinner.module.css'

function FullscreenSpinner({ loading }) {
    if(loading) {
        return (
            <div className={classes.spinnerOverlay}><Spinner animation="border" variant="light" /></div>
        )
    }
    return <></>
}

export default FullscreenSpinner
