export class User {
    name?: string;
    email: string;
    password: string;
    role?: string;
    createdAt?:Date;
    title?:string;
    about?:string;
    place?:string;
    website?:string;
    profile_image?: string;
    blocked?:Boolean;
    resetPasswordToken?:string;
    resetPasswordExpire?: Date;
    access_token?:string;
}