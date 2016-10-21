import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: `
        <div class="container-fluid" id="mainBg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>SHOP19</h1>
                        <h3>Pakistan's Largest Marketplace</h3>
                    </div>
                </div>            
            </div>
        </div>
  
  `,
  styles: [`
        /*Background Area After Nav*/
        #mainBg{width: 100%;
                min-height: 100vh;
                background-image: url(../assets/mainBg.jpg);
                background-repeat: no-repeat;
                background-size: cover;}

        #mainBg .col-md-12{position: relative;
                        top: 200px;
                        font-family: 'Francois One', sans-serif;
                        }

        #mainBg h1{font-size: 5em;}
        #mainBg h3{font-size: 3em;}
`],

})


export class Home{
  
}