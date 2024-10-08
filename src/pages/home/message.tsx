import { Message } from "../../models/message"
import { format } from "../../utils/date";


export default function MessageBubble({ message: { text, id, date, response }, is_response = false }: { message: Message, is_response?: boolean }) {
    let rendered_text;
    if (is_response)
        rendered_text = response?.read().text
    else
        rendered_text = text

    return <li key={id} className={ `message ${ is_response ? "from-model" : "from-user" }` }>
            <p>{rendered_text}</p>
            <label>{format(date)}</label>
            </li>
}
