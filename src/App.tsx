import React from "react"
import Stack from "@mui/material/Stack"
import {styled} from "@mui/material/styles"
import {useTheme} from "mui-lib"
import {ThemeProvider} from "@mui/material"
import Button from "@mui/material/Button"
import {MyComponent} from "mui-lib"

const StyledApp = styled(Stack)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const App = () => {
    const theme = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <StyledApp>
                <p>Imported component:</p>
                <MyComponent />
                <p>Some styled buttons:</p>
                <Button variant="actionbar">
                    <span>Themed button</span>
                </Button>
                <Button>
                    <span>Normal button</span>
                </Button>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App
