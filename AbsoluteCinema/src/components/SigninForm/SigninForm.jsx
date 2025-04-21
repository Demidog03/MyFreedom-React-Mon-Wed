import { Button, Form } from 'react-bootstrap'
import classes from './SigninForm.module.css'
import { useState } from 'react'
import axios from 'axios'
import Toaster from '../../shared/Toaster/Toaster'
import { useNavigate } from 'react-router'
import PasswordInput from '../../shared/PasswordInput/PasswordInput'

function SigninForm() {
    const navigate = useNavigate()
    const [singinData, setSigninData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '', // ошибок нет
        password: ''
    })
    const [loginError, setLoginError] = useState('')

    function changeEmailInput(event) {
        setErrors({
            email: '',
            username: '',
            password: ''
        })
        setSigninData({
            ...singinData,
            email: event.target.value
        })
    }

    function changePasswordInput(event) {
        setErrors({
            email: '',
            username: '',
            password: ''
        })
        setSigninData({
            ...singinData,
            password: event.target.value
        })
    }

    async function submitForm(event) {
        event.preventDefault()
        let hasErrors = false

        try {
            const { email, password } = singinData

            if(!email) {
                setErrors((errors) => ({...errors, email: 'Email is required!'}))
                hasErrors = true
            }
            if(!password) {
                setErrors((errors) => ({...errors, password: 'Password is required!'}))
                hasErrors = true
            }

            if(hasErrors) {
                return
            }

            const response = await axios.post('http://localhost:5000/auth/login', {
                email, password
            })
            
            if(response?.status === 200 && response?.data) {
                navigate('/')
            }
        }
        catch(err) {
            console.error(err)
            setLoginError(err?.response?.data?.message || 'Error when login!')
        }
    }

    function closeToaster() {
        setLoginError('')
    }

    function goToSignupPage() {
        navigate('/sign-up')
    }

    return (
        <Form className={classes.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    onChange={changeEmailInput}
                    type="email"
                    placeholder="Enter email"
                    isInvalid={Boolean(errors.email)} // Boolean('') => false, Boolean('Email is required!') => true
                />
                <Form.Control.Feedback type="invalid">
                   {errors.email} {/* Email is required! */}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <PasswordInput
                    onChange={changePasswordInput}
                    placeholder="Enter password"
                    isInvalid={Boolean(errors.password)}
                    error={errors.password}
                />
            </Form.Group>
            <Button onClick={goToSignupPage} variant='link'>Do not have account? Sign-up</Button>
            <Button onClick={submitForm} variant="primary" type="submit">
                Submit
            </Button>
            <Toaster onClose={closeToaster} isActive={Boolean(loginError)} text={loginError}/> {/* loginError = '' => false, loginError = 'Ошибка' => true */}
        </Form>
    )
}

export default SigninForm
