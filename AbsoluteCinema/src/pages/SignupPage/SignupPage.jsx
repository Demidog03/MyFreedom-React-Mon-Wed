import { Container } from 'react-bootstrap'
import classes from './SignupPage.module.css'
import SignupForm from '../../components/SignupForm/SignupForm'

function SignupPage() {
    return (
        <Container fluid="xl">
            <div className={classes.signupFormContainer}>
                <h1 className='mb-4'>Sign-up</h1>
                <SignupForm/>
            </div>
        </Container>
    )
}

export default SignupPage
