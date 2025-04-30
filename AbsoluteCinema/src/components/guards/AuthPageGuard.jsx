import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate, useLocation } from "react-router"

function AuthPageGuard({ children }) {
    const { currentUser } = useContext(UserContext)
    const location = useLocation() // state = {from: '/movies'}

    if(!currentUser) {
        return <Navigate state={{ from: location }} to='/sign-in' />
    }
    
    return children
}

export default AuthPageGuard
