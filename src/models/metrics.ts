export interface MessagesPerPerson extends ChartData {
    person: string
}

export interface MessagesOverTime extends ChartData {
    date: Date
}

export type ChartConfig<T extends ChartData> = {
    chartType: ChartType,
    data: T[],
    title: string,
    x: keyof T,
    y: keyof T
}

export interface ChartData {
    count: number
}

export type ChartType = "line" | "bar"
