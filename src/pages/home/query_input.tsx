import { IconButton } from "@mui/joy"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { ServiceProps, Services, withService } from "../../services";

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

    return <div>
        <input onKeyDown={onEnter} type="text" onChange={event => setQuery(event.target.value)}/>
        <IconButton onClick={() => sendQuery(query)} variant="solid">
            <SendIcon />
        </IconButton>
    </div>
}

