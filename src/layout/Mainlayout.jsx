import { Outlet } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    palette: {
        primary: {
            main: "#FFA500",
        },
    },
});

const Mainlayout = () => {
    return (
        <main className="font-poppins">
            <ThemeProvider theme={theme}>
                <Outlet />
            </ThemeProvider>
        </main>
    )
}

export default Mainlayout