import { UserTypeEnum } from './userTypeEnum';

export class credentials {
    constructor(
        public userName?: string,
        public userPassword?: string,
        public userType?: UserTypeEnum,
        public userId?: number
    ) {}
        


    
}