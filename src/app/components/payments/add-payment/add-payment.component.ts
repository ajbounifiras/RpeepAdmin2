import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  
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
        headerTitle: 'Payment Management Add',
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
              name: 'Payment Management Add',
              isLink: false
            }
          ]
        }
      },
      this.breadcrumbChevron = {
        type: 'chevron',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
            
          },
          {
            name: 'Library',
            isLink: true,
            link: '/'
          },
          {
            name: 'Data',
            isLink: true,
            link: '/'

          }
        ]
      };
    
};


}
