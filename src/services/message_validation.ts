import { InjectableService } from ".";


export default class MessageValidation implements InjectableService {

    validate_user_message(text:string): boolean {
        return text.length > 0;
    }

}
