
import { ResponsiveContainer, AreaChart, Bar, XAxis, YAxis, Tooltip, BarChart, CartesianGrid, LineChart, Line } from "recharts";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../theme";

type ChartPropType<T> = {
    data: T[],
    xAxisKey: keyof T & string,
    yAxisKey: keyof T & string,
    type?: "line" | "bar"

}

export default function Chart<T>({ data, xAxisKey, yAxisKey, type = "bar" }: ChartPropType<T>) {
    const OuterChart = type == "line" ? LineChart : BarChart;
    const InnerChart = type == "line" ? Line : Bar;

    return <div className="chart" >
        <h2>Messages per person</h2>
        <ResponsiveContainer height="100%" width="100%">
            <OuterChart
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <XAxis dataKey={xAxisKey} stroke="white" fontWeight="bold" />
                <YAxis />
                <InnerChart dataKey={yAxisKey} stroke={SECONDARY_COLOR} fill={SECONDARY_COLOR} />
                <Tooltip />
            </OuterChart>
        </ResponsiveContainer>
    </div>
}

