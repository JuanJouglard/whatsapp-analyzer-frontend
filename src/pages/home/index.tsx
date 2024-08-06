import Chat from "./chat"
import Metrics from "./metrics"
import "./home.css"


export default function Home() {
    return <div className="home-container">
            <Chat />
            <Metrics />
    </div>
}
