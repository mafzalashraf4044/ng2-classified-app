export class AccountData{
    accountData = [];

    pushData(accountData){
        this.accountData.push(accountData);
    }

    verification(accountData){
        
        let isValid = [];
        //username verification
        for(var i = 0; i<this.accountData.length; i++){
            if(this.accountData[i].username == accountData.username)
                isValid[0] = true;
            else
                isValid[0] = false;
        }

        //password verification
        for(var i = 0; i<this.accountData.length; i++){
            if(this.accountData[i].password == accountData.password)
                isValid[1] = true;
            else
                isValid[1] = false;
        }
        return isValid;
    }

}