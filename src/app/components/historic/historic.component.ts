import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Historical',
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
            name: 'Historical',
            isLink: true,
            link: '/'
          },
        ]
      }
    }
   
  
};
}
