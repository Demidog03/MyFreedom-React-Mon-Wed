import { RouterProvider } from "react-router"
import router from "./router"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
