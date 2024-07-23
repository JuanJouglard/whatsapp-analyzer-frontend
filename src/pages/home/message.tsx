
type MessagePropTypes = {
    text: string,
    fromUser: boolean
}

export default function MessageBubble({ text, fromUser }: MessagePropTypes) {
    return <li className={`message ${ fromUser ? "from-user" : "from-model" }`}>{text}</li>
}
