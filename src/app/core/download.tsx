"use client"
import { useParams } from "next/navigation"

export default function DownloadButton({ download }: { download: Function }) {
    const { file_id } = useParams()


    return <button onClick={download.bind(null, file_id)}>Download PDF</button>
}
