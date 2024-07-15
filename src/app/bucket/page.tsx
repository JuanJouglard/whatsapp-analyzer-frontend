import Link from "next/link";
import { withService } from "@/app/services"
import { ServiceProps } from "@/app/services/dependency_injection";

async function InnerHome({ minio }: ServiceProps) {
    const buckets = await minio.get_buckets()

    return (
        <div className="">
            <ul>
                {buckets.map((bucket) =>
                    <Link key={bucket.name} href={`/bucket/${bucket.name}`}>
                        <li>{bucket.name}</li>
                    </Link>)}
            </ul>
        </div>
    );
}

export default withService(InnerHome, ["minio"])
