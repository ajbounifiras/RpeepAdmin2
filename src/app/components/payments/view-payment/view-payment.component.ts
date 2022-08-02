import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})
export class ViewPaymentComponent implements OnInit {

   
    // public
    public contentHeader: object;
    public breadcrumbChevron: Breadcrumb;
    
    
    constructor(private _coreTranslationService: CoreTranslationService){
      this._coreTranslationService.translate(english, french, arabic);
    }
   
  
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
  
    /**
     * On init
     */
    ngOnInit() {
      this.contentHeader = {
        headerTitle: 'Payment Management List',
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
              name: 'Payment Management List',
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
