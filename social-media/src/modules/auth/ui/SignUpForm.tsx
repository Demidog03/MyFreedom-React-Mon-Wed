import { Button, Stack, TextField } from "@mui/material"
import classes from './auth.module.scss'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const signUpFormSchema = yup.object().shape({
    username: yup.string()
        .min(6, 'Username must be at least 6 characters')
        .max(30, 'Username must be max 30 characters')
        .required('Username is required'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords does not match').required('Please confirm password')
});

interface SignUpFormData {
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

function SignUpForm() {
    const { handleSubmit, register, formState: { errors } } = useForm<SignUpFormData>({
        defaultValues: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'all',
        resolver: yupResolver(signUpFormSchema)
    })

    console.log(errors)

    function submitForm(values: SignUpFormData) {
        console.log(values)
    }

    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit(submitForm)}>
            <Stack className={classes.signInFormContainer} gap={2}>
                <TextField
                    error={Boolean(errors.username)}
                    helperText={errors.username?.message}
                    {...register('username')}
                    fullWidth
                    id="username"
                    type="text"
                    label="Username"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                    {...register('firstName')}
                    fullWidth
                    id="firstName"
                    type="text"
                    label="First Name"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                    {...register('lastName')}
                    fullWidth
                    id="lastName"
                    type="text"
                    label="Last Name"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    {...register('email')}
                    fullWidth
                    id="email"
                    type="text"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    {...register('password')}
                    fullWidth
                    id="password"
                    type="text"
                    label="Password"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword?.message}
                    {...register('confirmPassword')}
                    fullWidth
                    id="confirmPassword"
                    type="text"
                    label="Confirm Password"
                    variant="outlined"
                />
                <Button type="submit" className={classes.submitBtn} disableElevation variant="contained">Submit</Button>
            </Stack>
        </form>
    )
}

export default SignUpForm
