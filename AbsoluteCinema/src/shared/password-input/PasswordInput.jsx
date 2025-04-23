import React, { useState } from 'react'
import { EyeFillIcon, EyeSlashFillIcon } from '../Icons'
import { Form } from 'react-bootstrap'
import classes from './PasswordInput.module.css'

function PasswordInput(props) {
    const [isVisible, setIsVisible] = useState(false)

    function showPassword() {
        setIsVisible(true)
    }

    function hidePassword() {
        setIsVisible(false)
    }

    return (
        <div className={classes.passwordInputContainer}>
            <Form.Control
                {...props}
                type={!isVisible ? 'password' : 'text'}
            />
            <Form.Control.Feedback type="invalid">
                {props.error}
            </Form.Control.Feedback>
            {!props.isInvalid && !isVisible && (
                <div onClick={showPassword} className={classes.icon}>
                    <EyeSlashFillIcon />
                </div>
            )}
            {!props.isInvalid && isVisible && (
                <div onClick={hidePassword} className={classes.icon}>
                    <EyeFillIcon/>
                </div>
            )}
        </div>
    )
}

export default PasswordInput
