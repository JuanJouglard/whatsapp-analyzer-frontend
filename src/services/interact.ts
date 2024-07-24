import { InjectableService } from "."
import { Message } from "../models/message"
import Singleton from "./singleton"
import { SuspendableResource, SuspendableService } from "./suspendable"

@Singleton
export default class InteractService extends SuspendableService implements InjectableService  {


    private innerSendQuery(text: string): Promise<Message> {
        console.log("TEXT: ", text)
        return new Promise((resolve, _) => {
            setTimeout(() => {
                resolve(
                    {
                        "text": "Response from model",
                        "id": Math.random() * 100 + "",
                        "date": new Date()
                    }
                )
            }, 2000)
        })
    }

    sendQuery(text: string): SuspendableResource<Message> {
        return this.compatibleWithSuspend(this.innerSendQuery(text))
    }
}

