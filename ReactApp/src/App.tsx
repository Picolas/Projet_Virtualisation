import * as React from "react"
import {
    DarkMode, useColorMode,
} from "@chakra-ui/react"
import {Navbar} from "./component/Navbar/navbar.component";
import {BrowserRouter} from "react-router-dom";
import RoutesNavigator from "./Routes/RoutesNavigator";
import {useEffect} from "react";



export const App = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        if (colorMode === 'light')
            toggleColorMode()
    }, [])

    return (
        <BrowserRouter>
                <Navbar></Navbar>
                <RoutesNavigator />
        </BrowserRouter>
    )
}
