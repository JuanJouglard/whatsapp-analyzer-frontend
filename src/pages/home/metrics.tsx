import { useEffect, useState } from "react";
import { ServiceProps, Services, withService } from "../../services";
import Chart from "./chart";
import { ChartConfig, ChartData } from "../../models/metrics";



function Metrics({ metrics }: ServiceProps) {
    const [charts, setCharts] = useState<ChartConfig<ChartData>[]>([])


    useEffect(() => {
        const allMetrics: ChartConfig<ChartData>[] = metrics?.getAllMetrics() || []
        setCharts(allMetrics)
    }, [])

    return <div className="metrics">
            {
                charts.map((chart: ChartConfig<ChartData>) => <Chart data={chart.data} type={chart.chartType} xAxisKey={chart.x} yAxisKey={chart.y} /> )
            }
        </div>
}

export default withService(Metrics, [Services.Metrics])
