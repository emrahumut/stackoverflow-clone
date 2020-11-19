export class Answer {
    content: string;
    createdAt: Date;
    likes?: Array<string>;
    user:string;
    question:string;
    likeCount: number;
}
