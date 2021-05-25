export class UserModule {
    uid !: string;
    username !: string;
    email !: string;
    pword !: string;
    constructor(obj : any = null){
        if(obj != null){
            Object.assign(this, obj);
        }
    }
}