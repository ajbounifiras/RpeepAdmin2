import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable'
@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

    
    // public
    public contentHeader: object;
    public breadcrumbChevron: Breadcrumb;
    public selectedOption = 10;
    public ColumnMode = ColumnMode;
    public rows;
    constructor() {}
  
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
  
    /**
     * On init
     */
    ngOnInit() {
      this.contentHeader = {
        headerTitle: 'Permissions List',
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
              name: 'Permissions List',
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
