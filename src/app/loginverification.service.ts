export class LoginVerification{
    isLogin: boolean = false;
    accountData;

    setAccountData(accountData){
        this.accountData = accountData;
    }

    getUsername(){
        return this.accountData.username;
    }
}