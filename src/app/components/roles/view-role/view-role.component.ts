import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.scss']
})
export class ViewRoleComponent implements OnInit {
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
    headerTitle: 'Role List',
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
          name: 'Roles & Permissions',
          isLink: true,
          link: '/'
        },
        {
          name: 'Roles List',
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
