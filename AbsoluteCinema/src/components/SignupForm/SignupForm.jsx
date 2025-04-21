import { Button, Form } from 'react-bootstrap'
import classes from './SignupForm.module.css'
import Toaster from '../../shared/Toaster/Toaster'
import { useState } from 'react'
import { EmailValidation, PasswordValidation, UsernameValidation } from '../../shared/ValidationRegex'
import { useNavigate } from 'react-router'
import axios from 'axios'
import PasswordInput from '../../shared/PasswordInput/PasswordInput'

function SignupForm() {
    const navigate = useNavigate()
    const [singupData, setSignupData] = useState({
        email: '',
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        username: '',
        password: ''
    })
    const [registerError, setRegisterError] = useState('')

    function changeUsername(event) {
        setErrors({
            ...errors,
            username: '',
        })
        setSignupData({
            ...singupData,
            username: event.target.value
        })
    }

    function changeEmail(event) {
        setErrors({
            ...errors,
            email: '',
        })
        setSignupData({
            ...singupData,
            email: event.target.value
        })
    }

    function changePassword(event) {
        setErrors({
            ...errors,
            password: '',
        })
        setSignupData({
            ...singupData,
            password: event.target.value
        })
    }

    async function submitForm(event) {
        event.preventDefault()
        const { email, password, username } = singupData
        let hasErrors = false

        try {
            if(!UsernameValidation.test(username)) {
                setErrors((errors) => ({...errors, username: 'Username must be between 6 and 16 characters, alphanumeric only'}))
                hasErrors = true
            }
            if(!EmailValidation.test(email)) {
                setErrors((errors) => ({...errors, email: 'Please enter a valid email address (e.g., name@example.com).'}))
                hasErrors = true
            }
            if(!PasswordValidation.test(password)) {
                setErrors((errors) => ({...errors, password: 'Password must be at least 8 characters long and contain at least one letter and one number.'}))
                hasErrors = true
            }

            if (hasErrors) {
                return
            }

            const response = await axios.post('http://localhost:5000/auth/register', {
                username, email, password
            })
            if(response?.status === 201 && response?.data) {
                navigate('/sign-in')
            }
        }
        catch(err) {
            console.error(err)
            setRegisterError(err?.response?.data?.message || 'Failed to sign-in!')
        }
    }

    function closeToaster() {
        setRegisterError('')
    }

    function goToSigninPage() {
        navigate('/sign-in')
    }

    return (
        <Form className={classes.form}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    onChange={changeUsername}
                    type="text"
                    placeholder="Enter username"
                    isInvalid={Boolean(errors.username)}
                />
                <Form.Control.Feedback type="invalid">
                   {errors.username}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    onChange={changeEmail}
                    type="email"
                    placeholder="Enter email"
                    isInvalid={Boolean(errors.email)}
                />
                <Form.Control.Feedback type="invalid">
                   {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <PasswordInput
                    onChange={changePassword}
                    placeholder="Enter password"
                    isInvalid={Boolean(errors.password)}
                    error={errors.password}
                />
            </Form.Group>
            <Button onClick={goToSigninPage} variant='link'>Already have an account? Sign-in</Button>
            <Button onClick={submitForm} variant="primary" type="submit">
                Submit
            </Button>
            <Toaster onClose={closeToaster} isActive={Boolean(registerError)} text={registerError}/>
        </Form>
    )
}

export default SignupForm
