export interface IShare {
    url?: string,
    files?: string,
    message?: string,
    subject?: string,
    chooserTitle?: string
}

export class Share implements IShare {
    url: string;
    files: string;
    message: string;
    subject: string;
    chooserTitle: string;

    constructor() {
        this.url = '';
        this.files = '';
        this.message = '';
        this.subject = '';
        this.chooserTitle = '';
    }
}