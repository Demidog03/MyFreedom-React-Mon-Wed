import { Container } from 'react-bootstrap'
import classes from './SigninPage.module.css'
import SigninForm from '../../components/SigninForm/SigninForm'
import BackButton from '../../shared/BackButton/BackButton'

function SigninPage() {
    return (
        <Container fluid="xl">
            <BackButton to="/" />
            <div className={classes.signinFormContainer}>
                <h1 className='mb-4'>Sign-in</h1>
                <SigninForm />
            </div>
        </Container>
    )
}

export default SigninPage
