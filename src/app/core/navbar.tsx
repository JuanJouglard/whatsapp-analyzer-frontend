import Link from "next/link"
import { useParams } from "next/navigation"

const links = [
    {
        "title": "Metrics",
        "route": "metrics"
    },
    {
        "title": "RAG",
        "route": "rag"
    },
]


export default function Navbar() {
    return <div className="w-full bg-primary p-1">
        <ul className="flex-row flex justify-evenly">
            {
                links.map((link) =>
                          <Link key={link.route} href={link.route}>
                              <li>{link.title}</li>
                          </Link>)
            }
        </ul>
    </div>
}
