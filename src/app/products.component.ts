import {Component} from '@angular/core';
import {ProductList} from './productList.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styles: [`
      /*Products*/

      .blackHr{border-color: black;}
      .whiteHr{border-color: white;}


      /*First Container*/

      #con1{background-image:  url(../assets/bg.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: bottom left;
            width: 100%;
            min-height: 100vh;
            font-family: 'Francois One', sans-serif;}

      .panel-body img{width: 100%;}
      .panel-body{min-height: 361px;}
      @media only screen and (min-device-width: 992px){
        .panel-body img.prodImg{width: 100%; height: 20vh;}
      }

      @media only screen and (max-device-width: 992px){
        .panel-body{text-align: center;}
      }

  `],
  
})


export class Products{
  product: ProductList;
  allProducts = [];
  filteredProducts = [];
  showSearchPost: boolean = false;
  showCurrentPost: boolean = false;
  currentPost;

  constructor(private productList: ProductList){
    this.allProducts = productList.getProductList();  
  }

    showPost(product){
      this.showCurrentPost = true;    
      this.currentPost = product;  
  }  

    goToProducts(){
      this.showCurrentPost = false;
    }

    searchProducts(search){
      this.filteredProducts = [];
      for(var i = 0; i<this.allProducts.length; i++){

        if(this.allProducts[i].title == search || this.allProducts[i].category == search){
          this.filteredProducts.push(this.allProducts[i]);
        }
      }

      if(this.filteredProducts.length > 0){
        this.showSearchPost = true;
      }else{
        alert("No Result Found!");
      }

    }

    setShowSearchPost(){
      this.showSearchPost = false;
    }


}