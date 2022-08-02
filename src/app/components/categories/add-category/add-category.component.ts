import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  // public
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Category Add',
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
            name: 'Add',
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