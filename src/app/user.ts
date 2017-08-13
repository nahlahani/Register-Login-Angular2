export class User {

    id: number;
    username: string;
    passsword: string;
    pp: string;

    constructor(
        public userName = '',
        public password = '',
        public profilePic = ''
        ) { }
}
