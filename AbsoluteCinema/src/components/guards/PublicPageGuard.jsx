import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate, useLocation } from "react-router"

function PublicPageGuard({ children }) {
    const { currentUser } = useContext(UserContext)
    const location = useLocation()
    const fromPage = location?.state?.from?.pathname || '/'

    if(currentUser) {
        return <Navigate to={fromPage} />
    }

    return children
}

export default PublicPageGuard
