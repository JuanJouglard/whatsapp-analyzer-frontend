import { IconButton } from "@mui/joy"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { ServiceProps, Services, withService } from "../../services";
import { PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR } from "../../theme";

type QueryInputProps = {
    sendQuery: Function
}

export default function QueryInput({sendQuery} : QueryInputProps & ServiceProps) {
    const [query, setQuery] = useState("")

    const onEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter") {
            sendQuery(query)
            setQuery("")
        }
    }

    return <div className="input-container">
        <input onKeyDown={onEnter} type="text" onChange={event => setQuery(event.target.value)}/>
        <button className="send-button" style={{backgroundColor: THIRD_COLOR}} onClick={() => sendQuery(query)}>➤</button>
    </div>
}

