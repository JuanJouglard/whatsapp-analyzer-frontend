import { useState } from "react";
import { ServiceProps } from "../../services";
import { THIRD_COLOR } from "../../theme";

type QueryInputProps = {
    sendQuery: Function
}

export default function QueryInput({sendQuery} : QueryInputProps & ServiceProps) {
    const [query, setQuery] = useState("")

    const onEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter") {
            sendAndClean(query)
        }
    }

    const sendAndClean = (query:string) => {
            sendQuery(query)
            setQuery("")
    }

    return <div className="input-container">
        <input data-testid="query-input" value={query} onKeyDown={onEnter} type="text" onChange={event => setQuery(event.target.value)}/>
        <button data-testid="send-button"
                className="send-button"
                style={{backgroundColor: THIRD_COLOR}}
                onClick={() => sendAndClean(query)}>➤</button>
    </div>
}

