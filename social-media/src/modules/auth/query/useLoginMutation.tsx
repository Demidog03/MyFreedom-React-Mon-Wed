import { useMutation } from '@tanstack/react-query'
import { loginApi } from '../api/auth.api'
import { AxiosError } from 'axios'
import { RequestError } from '../../../types'
import { useSnackbar } from 'notistack';

export default function useLoginMutation() {
    const { enqueueSnackbar } = useSnackbar()

    return useMutation({
        mutationFn: loginApi,
        onError: (error: AxiosError<RequestError>) => {
            enqueueSnackbar(error.response?.data?.error || 'Error when login user', {
                variant: 'error',
                autoHideDuration: 3000,
                anchorOrigin: { horizontal: 'right', vertical: 'top' }
            })
        }
    })
}