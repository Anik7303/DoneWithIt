import colors from "./colors"

export default {
    colors,
    text: {
        color: colors.dark,
        ...Platform.select({
            ios: {
                fontSize: 18,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 16,
                fontFamily: "Roboto",
            },
        }),
    },
    formField: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderColor: "#ddd",
        borderRadius: 50,
        borderWidth: 1,
        marginVertical: 6,
        overflow: "hidden",
    },
}
