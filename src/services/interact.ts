import { InjectableService } from "."
import { Message } from "../models/message"
import Singleton from "./singleton"

@Singleton
export default class InteractService implements InjectableService {


    sendQuery(text: string): Message {
        console.log("TEXT: ", text)
        return null
    }
}

