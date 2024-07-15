import ConversationFile from "./file";

export default class Bucket {
    name: string;
    creationDate: Date = new Date();
    objects: ConversationFile[];

    constructor(bucket: any) {
        this.name = bucket.name
        this.creationDate = new Date(bucket.creationDate)
        this.objects = []
    }
}
