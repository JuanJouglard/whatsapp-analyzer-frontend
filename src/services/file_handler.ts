import axios from "axios";
import { InjectableService } from ".";
import Singleton from "./singleton"



@Singleton
export class FileHandler implements InjectableService {

    constructor() {

    }

    upload(form_data: FormData) {
        return axios.post("http://localhost:8000/file/parse", form_data)
    }

}
