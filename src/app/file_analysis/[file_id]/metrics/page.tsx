import Download from "@/app/core/download"
import { withService } from "@/app/services"
import { ServiceProps } from "@/app/services/dependency_injection"

function InnerMetrics({ minio }: ServiceProps) {

    const downloadFile = async  (id: string) => {
        "use server"
        console.log("Download File")
        const file = await minio.download_pdf(id)
        console.log( `File to download: ${file}` )
    }
    return <Download download={downloadFile}/>
}

export default withService(InnerMetrics, ["minio"])
