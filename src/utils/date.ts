

export function format(date: Date) {
    const iso = date.toISOString().split("T")
    const date_aux = iso[0]
    const time = iso[1]
    return `${time} ${date_aux}`
}
