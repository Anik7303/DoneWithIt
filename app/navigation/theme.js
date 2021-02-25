import { DefaultTheme } from "@react-navigation/native"

import colors from "../config/colors"

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white,
    },
}

export default theme
