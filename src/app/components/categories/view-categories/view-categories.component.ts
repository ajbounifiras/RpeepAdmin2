import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent implements OnInit {
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  constructor() { }

  ngOnInit(): void {

  this.contentHeader = {
      headerTitle: 'Category View',
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
            name: 'Category',
            isLink: true,
            link: '/'
          },
          {
            name: 'View',
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
