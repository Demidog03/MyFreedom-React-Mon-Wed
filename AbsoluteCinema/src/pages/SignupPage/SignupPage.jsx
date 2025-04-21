import { Container } from 'react-bootstrap'
import classes from './SignupPage.module.css'
import SignupForm from '../../components/SignupForm/SignupForm'
import BackButton from '../../shared/BackButton/BackButton'

function SignupPage() {
    return (
        <Container fluid="xl">
            <BackButton to="/" />
            <div className={classes.signupFormContainer}>
                <h1 className='mb-4'>Sign-up</h1>
                <SignupForm/>
            </div>
        </Container>
    )
}

export default SignupPage
