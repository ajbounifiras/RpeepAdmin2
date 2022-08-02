import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.scss']
})
export class AddPaymentMethodComponent implements OnInit {
  
    // public
    public contentHeader: object;
    public breadcrumbChevron: Breadcrumb;
    
    
    constructor(){}
   
  
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
  
    /**
     * On init
     */
    ngOnInit() {
      this.contentHeader = {
        headerTitle: 'Payment Method Add',
        actionButton: true,
        breadcrumb: {
          type: '',
          links: [
            {
              name: 'Home',
              isLink: true,
              link: '/',
              
            },
            {
              name: 'Payment',
              isLink: true,
              link: '/'
            },
            {
              name: 'Payment Method Add',
              isLink: false
            }
          ]
        }
      }
      
    
};


}
