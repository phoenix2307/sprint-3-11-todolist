import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {MenuButton} from "./MenuButton";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import {changeThemeAC, ThemeMode} from "./app/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import {getTheme} from "./common/theme/theme";


export const Header = () => {
    const themeMode = useSelector<RootState, ThemeMode>((state) => state.app_themeMode?.themeMode)
    const dispatch = useDispatch()
    const theme = getTheme(themeMode)
    const changeModeHandler = () => {
        dispatch(changeThemeAC(themeMode === "light" ? "dark" : 'light'))
    }
    return (
        <AppBar position="static" sx={{mb: '30px'}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <IconButton color="inherit">
                    <MenuIcon/>
                </IconButton>
                <div>
                    <MenuButton>Login</MenuButton>
                    <MenuButton>Logout</MenuButton>
                    <MenuButton background={theme.palette.primary.dark}>Faq</MenuButton>
                    <Switch color={'default'} onChange={changeModeHandler}/>
                </div>
            </Toolbar>
        </AppBar>
    )
}