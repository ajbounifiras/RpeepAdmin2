import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from './i18n/en'
import { locale as french } from './i18n/fr'
import { locale as arabic } from './i18n/ar'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  constructor(private _coreTranslationService: CoreTranslationService) {
    
    this._coreTranslationService.translate(english, french, arabic);
   }

  ngOnInit(): void {

  this.contentHeader = {
      headerTitle: 'Contact',
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
            name: 'Contact',
            isLink: true,
            link: '/'
          },
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

