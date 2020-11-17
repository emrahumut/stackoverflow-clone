export class Question {
    title:string;
    content:string;
    slug?:string; 
    createdAt?:Date; 
    user:string;
    likeCount?:Number; 
    answerCount?:Number; 
    likes?:Array<string>; 
    answers?:Array<string>;
    _id:string; 
}
