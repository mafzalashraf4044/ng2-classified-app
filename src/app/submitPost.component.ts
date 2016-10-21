import {Component} from '@angular/core';

import {ProductList} from './productList.service';
import {LoginVerification} from './loginverification.service';


@Component({
  selector: 'submit',
  templateUrl: './submitPost.component.html',
  styleUrls: ['./submitPost.component.css'],

})


export class SubmitPost{
  allProducts = [];
  adSubmitted: boolean = false;
  isLogin: boolean;
  username;

  constructor(private productList: ProductList, private loginVerification: LoginVerification){
    this.allProducts = productList.getProductList();  
//    console.log(loginVerification.isLogin);
    this.isLogin = loginVerification.isLogin;
    
    if(this.isLogin == true){
      this.username = loginVerification.getUsername();
    }  

}

  submitAd(product){
    this.productList.addProduct(product);
    this.adSubmitted = true;
  }
}