import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
const URL = 'https://your-url.com';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

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
        headerTitle: ' Add',
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
              name: 'Ad',
              isLink: true,
              link: '/'
            },
            {
              name: 'Ad Add',
              isLink: false
            }
          ]
        }
      }
     
    
};
}

