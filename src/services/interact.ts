import { InjectableService } from "."
import { Message } from "../models/message"
import Singleton from "./singleton"

@Singleton
export default class InteractService implements InjectableService {


    sendQuery(text: string): Promise<Message> {
        console.log("TEXT: ", text)
        return Promise.resolve({
            "text": "Response from model",
            "id": Math.random() * 100 + "",
            "date": new Date()
        })
    }
}

