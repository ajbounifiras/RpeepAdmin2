import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
import { Reclamation } from '../models/reclamation';
import { ReclamationService } from '../services/reclamation.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.scss']
})
export class AddReclamationComponent implements OnInit {
 r=new Reclamation;
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;
    // public
    public contentHeader: object;
    public breadcrumbChevron: Breadcrumb;
    
    public uploader: FileUploader = new FileUploader({
      url: URL,
   
    });
    
     constructor(private re:ReclamationService,private _coreTranslationService: CoreTranslationService){

        
  this._coreTranslationService.translate(english, french, arabic);
     }

     ngOnInit(): void {
      // Fetch Geolocation
      navigator.geolocation.getCurrentPosition(position => {
        this.userLocationCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
      this.contentHeader = {
        headerTitle: 'complaint Add',
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
              name: 'complaint',
              isLink: true,
              link: '/'
            },
            {
              name: 'complaint Add',
              isLink: false
            }
          ]
        }
      }
     
   this.re.getAll(); 
};
Add(){
  this.re.add(this.r).subscribe(data=>{
   console.log(data)
   this.re.getAll();
  })
}
}

