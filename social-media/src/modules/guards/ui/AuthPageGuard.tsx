import { JSX, useEffect } from "react"
import useGetProfileQuery from "../../profile/query/useGetProfileQuery"
import { useNavigate } from "react-router"

interface AuthPageGuardProps {
    children: JSX.Element
}

function AuthPageGuard({ children }: AuthPageGuardProps) {
    const { isSuccess } = useGetProfileQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if(!isSuccess) {
            navigate('/sign-in')
        }
    }, [isSuccess])

    if(!isSuccess) {
        return null
    }

    return children
}

export default AuthPageGuard

{/* <AuthPageGuard>
    <h1></h1> -> children
</AuthPageGuard> */}
