import "./chat.css"
import { withService, ServiceProps } from "../../services";
import { useList } from "../../hooks/useList";
import { Message } from "../../models/message";
import MessageBubble from "./message";
import { useState, Suspense, Fragment } from "react";
import { LoadingMessage } from "../../shared";

function Chat({interact, message_validation}: ServiceProps) {
    const [ messages, addMessage ] = useList<Message>([])
    const [text, setText] = useState("")

    const onEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter" && message_validation?.validate_user_message(text)) {
            addMessage({ text , id: new Date().toISOString(), date: new Date(), response: interact?.sendQuery(text)})
            setText("")
        }
    }

    return <div className="chat-container">
            <ErrorBoundary fallback={<p>Ups something went wrong...</p>}>
                <Upload />
                <ul className="message-list" aria-label="message-list">
                    {messages.map(( message:Message ) => <Fragment key={message.id}>
                                      <MessageBubble message={message} />
                                        <Suspense fallback={<LoadingMessage />}>
                                          <MessageBubble is_response={true} message={message} />
                                         </Suspense>
                                  </Fragment>)}
                </ul>
                <QueryInput sendQuery={onEnter} />
            </ErrorBoundary>
        </div>
}

export default withService(Chat, [Services.Interact, Services.MessageValidation])
