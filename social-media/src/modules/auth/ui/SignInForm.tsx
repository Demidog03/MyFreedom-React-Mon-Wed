import { Button, Stack, TextField } from "@mui/material"
import classes from './auth.module.scss'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

interface SignInFormData {
    email: string
    password: string
}

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
});

function SignInForm() {
    const { register, formState: { errors }, handleSubmit } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: ''
        },
        // reValidateMode: 'onBlur',
        // mode: 'all',
        resolver: yupResolver(schema)
    })
 
    function submitForm(values: SignInFormData) {
        console.log(values)
    }

    return (
        // handleSubmit обьязателен
        <form style={{ width: '100%' }} onSubmit={handleSubmit(submitForm)}>
            <Stack className={classes.signInFormContainer} gap={2}>
                <TextField
                    {...register('email')} // чтобы useForm понимал поле email
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    fullWidth
                    id="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    {...register('password')} // чтобы useForm понимал поле password
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <Button type="submit" className={classes.submitBtn} disableElevation variant="contained">Submit</Button>
                {/* type="submit" обьязателен */}
            </Stack>
        </form>
    )
}

export default SignInForm
