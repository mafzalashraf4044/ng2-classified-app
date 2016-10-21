import {Component} from '@angular/core';

@Component({
  selector: 'contact-us',
  template: `
      <div class="container-fluid" id="con4">
          <div class="container" style="padding-top: 2em; padding-bottom: 5em;">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <h2>Contact Us:</h2>
                  </div>
                  <div class="panel-body">
                    <h4>Need Assistance with Your Order???</h4>
                    <h5>Contact our customer service here (+92 21) 11-11-32729</h5>
                    <h5>They will be happy to help!</h5>
                  
                  </div>
              </div>
          </div>

      </div>
  `,
  styles: [`      
            #con4{background-image:  url(../assets/bg.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: bottom left;
            width: 100%;
            min-height: 67vh;
            font-family: 'Francois One', sans-serif;}`],
  
})

export class ContactUs{
  
}