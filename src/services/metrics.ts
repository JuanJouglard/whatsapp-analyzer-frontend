import { ChartConfig, ChartData, MessagesOverTime, MessagesPerPerson } from "../models/metrics"

export interface MetricsService {
    getMessagesOverTime(): ChartConfig<MessagesOverTime>
    getMessagesByPerson(): ChartConfig<MessagesPerPerson>
    getAllMetrics(): ChartConfig<ChartData>[]
}

export default class MetricsServiceImplementation implements MetricsService {

    getMessagesOverTime() : ChartConfig<MessagesOverTime> {
        return {
            "chartType": "line",
            "title": "Messages over time",
            "data": [
                { date: new Date( "2024-01-01T00:00:00.000Z" ), count: 42 },
                { date: new Date( "2024-01-02T00:00:00.000Z" ), count: 15 },
                { date: new Date( "2024-01-03T00:00:00.000Z" ), count: 87 },
                { date: new Date( "2024-01-04T00:00:00.000Z" ), count: 53 },
                { date: new Date( "2024-01-05T00:00:00.000Z" ), count: 21 },
                { date: new Date( "2024-01-06T00:00:00.000Z" ), count: 78 },
                { date: new Date( "2024-01-07T00:00:00.000Z" ), count: 9 },
                { date: new Date( "2024-01-08T00:00:00.000Z" ), count: 34 },
                { date: new Date( "2024-01-09T00:00:00.000Z" ), count: 65 },
                { date: new Date( "2024-01-10T00:00:00.000Z" ), count: 30 }
                    ],
            "x": "date",
            "y": "count"
        }
    }

    getMessagesByPerson() : ChartConfig<MessagesPerPerson> {
        const data: MessagesPerPerson[] = [
            {
                person: "John Doe",
                count: 10
            },
            {
                person: "Jane Doe",
                count: 40
            },
            {
                person: "Jack Doe",
                count: 30
            },
            {
                person: "Paul Doe",
                count: 20
            },
            {
                person: "Steve Doe",
                count: 50
            },

        ]
        return { chartType: "bar", data, x: "person", y: "count", title: "Messages per person" }
    }

    getAllMetrics(): ChartConfig<ChartData>[] {
        return [this.getMessagesOverTime(), this.getMessagesByPerson()]
    }
}

