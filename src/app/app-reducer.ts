export type ThemeMode = 'dark' | 'light'
type InitialState = typeof InitialState

const InitialState = {
    themeMode: 'light' as ThemeMode
}

export const appReducer = (state: InitialState = InitialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, themeMode: action.mode}
        default:
            return state
    }
}

type ActionsType = ChangeThemeActionType

type ChangeThemeActionType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (mode: ThemeMode) => {
    return {
        type: 'CHANGE_THEME',
        mode
    } as const
}