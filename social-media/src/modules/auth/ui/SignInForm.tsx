import { Button, Stack, TextField } from "@mui/material"
import classes from './auth.module.scss'

function SignInForm() {

    return (
        <Stack className={classes.signInFormContainer} gap={2}>
            <TextField error={true} required fullWidth id="email" type="email" label="Email" variant="outlined" helperText="Email is required!" />
            <TextField required fullWidth id="password" type="password" label="Password" variant="outlined" />
            <Button className={classes.submitBtn} disableElevation variant="contained">Submit</Button>
        </Stack>
    )
}

export default SignInForm
