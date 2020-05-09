export interface IStory {
    likes: number,
    content: string,
    category: string,
    timestamp: number,
    storyName: string,
    storyImage: string
}

export class Story implements IStory {
    likes: number;
    content: string;
    category: string;
    timestamp: number;
    storyName: string;
    storyImage: string;

    constructor() {
        this.likes = 0;
        this.content = '';
        this.category = '';
        this.timestamp = 0;
        this.storyName = '';
        this.storyImage = '';
    }
}