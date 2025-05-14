import { useMutation } from '@tanstack/react-query'
import { registerApi } from '../api/auth.api'
import { AxiosError } from 'axios'
import { RequestError } from '../../../types'
import { useSnackbar } from 'notistack';

export default function useRegisterMutation() {
    const { enqueueSnackbar } = useSnackbar()

    return useMutation({
        mutationFn: registerApi,
        onError: (error: AxiosError<RequestError>) => {
            enqueueSnackbar(error.response?.data?.error || 'Error when register user', {
                variant: 'error',
                autoHideDuration: 3000,
                anchorOrigin: { horizontal: 'right', vertical: 'top' }
            })
        }
    })
}