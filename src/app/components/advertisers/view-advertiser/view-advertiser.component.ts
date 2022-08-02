import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
const URL = 'https://your-url.com';

@Component({
  selector: 'app-view-advertiser',
  templateUrl: './view-advertiser.component.html',
  styleUrls: ['./view-advertiser.component.scss']
})
export class ViewAdvertiserComponent implements OnInit {
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;
    // public
    public contentHeader: object;
    public breadcrumbChevron: Breadcrumb;
    
    public uploader: FileUploader = new FileUploader({
      url: URL,
      isHTML5: true
    });
    

    
    constructor(){}
   
  
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
  
    /**
     * On init
     */
     ngOnInit(): void {
      // Fetch Geolocation
      navigator.geolocation.getCurrentPosition(position => {
        this.userLocationCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
      this.contentHeader = {
        headerTitle: 'advertiser View',
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
              name: 'advertiser',
              isLink: true,
              link: '/'
            },
            {
              name: 'advertiser View',
              isLink: false
            }
          ]
        }
      }
     
    
};
}

