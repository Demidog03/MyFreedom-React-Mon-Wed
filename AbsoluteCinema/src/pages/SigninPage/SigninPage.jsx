import { Container } from 'react-bootstrap'
import classes from './SigninPage.module.css'
import SigninForm from '../../components/SigninForm/SigninForm'

function SigninPage() {
    return (
        <Container fluid="xl">
            <div className={classes.signinFormContainer}>
                <h1 className='mb-4'>Sign-in</h1>
                <SigninForm />
            </div>
        </Container>
    )
}

export default SigninPage
