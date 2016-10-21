import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


//Services
import {ProductList} from './productList.service';
import {AccountData} from './accountdata.service'
import {LoginVerification} from './loginverification.service'

//Components

import {Home} from './home.component';
import {Products} from './products.component';
import {SubmitPost} from './submitPost.component';
import {MyAccount} from './myaccount.component';
import {ContactUs} from './contactus.component';

//Routers
import { RouterModule, Router, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',          redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',      component: Home },
  { path: 'products', component: Products },
  { path: 'submitpost', component: SubmitPost },
  { path: 'myaccount', component: MyAccount },
  { path: 'contactus', component: ContactUs }    
];

@NgModule({
  declarations: [ AppComponent, Home, Products, SubmitPost, MyAccount, ContactUs ],
  imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [ ProductList, AccountData, LoginVerification ],
  bootstrap: [AppComponent]
})

export class AppModule { }
