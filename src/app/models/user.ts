export interface Member {
    identifier: string,
    pseudo: string,
    password : string;
    firstName: string;
    lastName: string;
    email: string;
    birthdate : Date;
}

export interface User{
    token: string;
    member: Member;
}
