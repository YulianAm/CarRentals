import { UserTypeEnum } from './userTypeEnum';


export class User {
    id : number;
    firstName: string;
    lastName: string;
    countryId: string;
    userName: string;
    dateOfBirth: Date;
    gender: string;
    email: string;
    userPassword: string;
    pathPhoto?: string;
    isAdmin: boolean;
    image?: any;
    userType?: UserTypeEnum;

}
 
 

