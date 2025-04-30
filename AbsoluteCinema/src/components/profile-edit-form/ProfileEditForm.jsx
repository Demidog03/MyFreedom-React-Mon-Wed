import { Button, Form, InputGroup } from "react-bootstrap"
import classes from './ProfileEditForm.module.css'
import { useContext, useReducer } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import Toaster from "../../shared/toaster/Toaster"
import FullscreenSpinner from "../../shared/fullscreen-spinner/FullscreenSpinner"
import profileReducer from "./profileReducer"

function ProfileEditForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const initialData = {
        username: currentUser?.username || '',
        email: currentUser?.email || '',
        isEditing: false,
        error: '',
        isLoading: false
    }
    const [state, dispatch] = useReducer(profileReducer, initialData)
    const { email, username, isEditing, error, isLoading } = state

    function allowEditing() {
        dispatch({ type: 'allowEditing' })
    }

    function resetForm() {
        dispatch({ type: 'resetForm', payload: {
            username: initialData.username,
            email: initialData.email
        }})
    }

    function changeUsername(event) {
        dispatch({ type: 'changeUsername', payload: event.target.value })
    }

    function changeEmail(event) {
        dispatch({ type: 'changeEmail', payload: event.target.value })
    }

    async function submitForm() {
        try {
            dispatch({ type: 'setIsLoading', payload: true })
            const response = await axios.put('http://localhost:5000/auth/profile/edit', {
                username, email
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })

            if(response.status === 200 && response?.data?.data) {
                setCurrentUser(response.data.data)
                dispatch({ type: 'disableEditing' })
            }
        }
        catch {
            dispatch({ type: 'setError', payload: 'Error when editing profile!' })
            resetForm()
        }
        finally {
            dispatch({ type: 'setIsLoading', payload: false })
        }
    }

    function closeToaster() {
        dispatch({ type: 'setError', payload: '' })
    }
    
    return (
        <Form className={classes.container}>
            <h1 className={classes.title}>Edit Profile</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="username">Username</InputGroup.Text>
                <Form.Control
                    onChange={changeUsername}
                    value={username}
                    aria-label="Username"
                    aria-describedby="username"
                    readOnly={!isEditing}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="email">Email</InputGroup.Text>
                <Form.Control
                    onChange={changeEmail}
                    value={email}
                    aria-label="Email"
                    aria-describedby="email"
                    readOnly={!isEditing}
                />
            </InputGroup>
            <div className={classes.buttonsContainer}>
                {!isEditing && <Button onClick={allowEditing} variant="outline-warning">Edit</Button>}
                {isEditing && <Button onClick={resetForm} variant="outline-danger">Cancel</Button>}
                <Button onClick={submitForm} disabled={!isEditing} variant="success">Submit</Button>
            </div>
            <Toaster onClose={closeToaster} isActive={Boolean(error)} text={error} />
            <FullscreenSpinner loading={isLoading} />
        </Form>
    )
}

export default ProfileEditForm
