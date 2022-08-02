import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-view-payment-method',
  templateUrl: './view-payment-method.component.html',
  styleUrls: ['./view-payment-method.component.scss']
})
export class ViewPaymentMethodComponent implements OnInit {

   
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
        headerTitle: 'Payment Method List',
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
              name: 'Payment Method List',
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
