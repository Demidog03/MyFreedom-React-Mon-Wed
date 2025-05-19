import { JSX, useEffect } from "react"
import useGetProfileQuery from "../../profile/query/useGetProfileQuery"
import { useNavigate } from "react-router"

interface PublicPageGuardProps {
    children: JSX.Element
}

function PublicPageGuard({ children }: PublicPageGuardProps) {
    const { isSuccess } = useGetProfileQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if(isSuccess) {
            navigate('/')
        }
    }, [isSuccess])

    if(isSuccess) {
        return <></>
    }

    return children
}

export default PublicPageGuard