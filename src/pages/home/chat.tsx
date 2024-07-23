import "./chat.css"
import { withService, ServiceProps } from "../../services";
import { useList } from "../../hooks/useList";
import { Message } from "../../models/message";
import MessageBubble from "./message";
import { useState } from "react";



function Chat({interact}: ServiceProps) {
    const [ messages, addMessage ] = useList<Message>([])
    const [text, setText] = useState("")

    const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log("EVENT: ", event)
        if (event.key == "Enter") {
            addMessage({ text , id: "2", date: new Date()})
            setText("")
        }
    }

    console.log("Messages: ", messages)
    return <div className="chat-container">
            <ul className="message-list">
                {messages.map(( message:Message, index:number ) => <MessageBubble text={message.text} key={message.id} fromUser={index % 2 == 0} />)}
            </ul>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                onKeyDown={onEnter}
            />
        </div>
}

export default withService(Chat, ["interact"])
