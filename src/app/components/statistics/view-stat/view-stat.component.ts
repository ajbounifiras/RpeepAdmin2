import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
@Component({
  selector: 'app-view-stat',
  templateUrl: './view-stat.component.html',
  styleUrls: ['./view-stat.component.scss']
})
export class ViewStatComponent implements OnInit {
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  constructor(private _coreTranslationService: CoreTranslationService) { 
    
    this._coreTranslationService.translate(english, french, arabic);
  }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Statistic',
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
            name: 'Statistic',
            isLink: false
          }
        ]
      }
    }
   
  
};
}