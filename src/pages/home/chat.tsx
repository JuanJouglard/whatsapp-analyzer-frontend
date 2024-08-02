import "./chat.css"
import { withService, ServiceProps, withErrorHandling, ErrorProps, Services } from "../../services";
import { useList } from "../../hooks/useList";
import { Message } from "../../models/message";
import MessageBubble from "./message";
import { Suspense, Fragment } from "react";
import { LoadingMessage } from "../../shared";
import { ErrorBoundary } from "react-error-boundary";
import { Upload } from "./upload"
import QueryInput from "./query_input";

function Chat({ interact, message_validation }: ServiceProps) {
    const [ messages, addMessage ] = useList<Message>([])

    const sendQuery = (text: string) => {
        if (message_validation?.validate_user_message(text))
            addMessage({ text , id: new Date().toISOString(), date: new Date(), response: interact?.sendQuery(text)})
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
                <QueryInput sendQuery={sendQuery} />
            </ErrorBoundary>
        </div>
}

export default withService(Chat, [Services.Interact, Services.MessageValidation])
