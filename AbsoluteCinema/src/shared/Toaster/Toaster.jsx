import { Button, Toast, ToastContainer } from 'react-bootstrap'
import { XLgIcon } from '../Icons'
import classes from './Toaster.module.css'

function Toaster({ isActive, text, onClose }) {
    if(isActive) {
        return (
            <ToastContainer
              className={classes.toasterContainer}
            >
                <Toast className={classes.toast}>
                    <Toast.Header className={classes.toasterHeader} closeButton={false}>
                        <strong className="me-auto">Error</strong>
                        <Button
                            onClick={onClose}
                            className={classes.closeBtn}
                            size='sm'
                            variant='outline-danger'
                        >
                            <XLgIcon/>
                        </Button>
                    </Toast.Header>
                    <Toast.Body>{text}</Toast.Body>
                </Toast>
            </ToastContainer>
        )
    }

    return null
}

export default Toaster
