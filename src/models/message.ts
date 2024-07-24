import { SuspendableResource } from "../services/suspendable"

export type Message = {
    id: string,
    text: string,
    date: Date,
    response?: SuspendableResource<Message>
}
