import { RouterProvider } from "react-router"
import router from "./router"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SnackbarProvider } from "notistack"

const queryClient = new QueryClient()

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <CssBaseline />
        </ThemeProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  )
}

export default App
