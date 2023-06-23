function getMedia(query: number) {
    return `@media (max-width: ${query})px`

}

export const media = {
    xs: getMedia(450),
    s: getMedia(600),
    m: getMedia(1024),
    l: getMedia(1200),
    xl: getMedia(1600)
}

export const font = {
    caveat: {
        name: "Caveat",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700"
    },
    comissioner: {
        name : "Comissioner",
        "100": "100",
        "200": "200",
        "300": "300",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900",
    }
}