import { ComponentType, Suspense } from "react"
import FullscreenLoading from "../../ui/FullscreenLoading"

const Loadable = (Component: ComponentType) => (props: Record<any, any>) => {
    return (
        <Suspense fallback={<FullscreenLoading open={true} />}>
            <Component {...props} />
        </Suspense>
    )
}

export default Loadable
