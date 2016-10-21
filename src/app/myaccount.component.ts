import {Component} from '@angular/core';

import {AccountData} from './accountdata.service'
import {LoginVerification} from './loginverification.service';

declare var $:any;

@Component({
  selector: 'my-app',
  templateUrl: './myaccount.component.html',
  styles: [`      
            #con3{background-image:  url(../assets/bg.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: bottom left;
            width: 100%;
            height: 67vh;
            font-family: 'Francois One', sans-serif;}
            
            div.alert.alert-danger{padding: 3px; margin: 5px auto;}
            `],
  
})


export class MyAccount{
  showRegisterAccount: boolean = false;
  isValid = [];
  loginMsg: string = "";
  loginMsgStatus: boolean = false;
  registrationStatus: boolean = false;

    constructor(private accountData: AccountData, private loginVerification: LoginVerification){

    }


    login(data){
      this.isValid = this.accountData.verification(data);
      console.log('inside login function');

      if(this.isValid[0] == true && this.isValid[1] == true){
        console.log('username pw correct');
        this.loginMsg = "Login Successful!"
        this.loginMsgStatus = true;
        this.loginVerification.isLogin = true;
        this.loginVerification.setAccountData(data);
      }

      else if(this.isValid[0] == true && this.isValid[1] == false){
             console.log('pw invalid');
        this.loginMsg = "Password Invalid!"
        this.loginMsgStatus = true;
      }

      else if(this.isValid[0] == false && this.isValid[1] == true){
             console.log('username invalid');
        this.loginMsg = "Username Invalid!"
        this.loginMsgStatus = true;
      }

      else{
             console.log('username pw invalid');
        this.loginMsg = "Username & Password Invalid!"
        this.loginMsgStatus = true;
      }
      
      this.isValid = [];

    }

    showRegisterArea(){
      this.showRegisterAccount = true;
    }

    register(data){
           console.log('inside register function');
           console.log(data);
      this.accountData.pushData(data);
      this.registrationStatus = true;
      $('#myModal1').modal('hide');
    }
}