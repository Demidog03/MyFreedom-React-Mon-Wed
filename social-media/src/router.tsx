import { createBrowserRouter } from "react-router";
import { HomePage, SignInPage, SignUpPage } from "./lazyPages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/sign-in',
        element: <SignInPage/>
    },
    {
        path: 'sign-up',
        element: <SignUpPage/>
    }
])

export default router