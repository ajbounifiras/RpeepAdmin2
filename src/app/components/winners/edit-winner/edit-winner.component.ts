import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
import { Winner } from '../models/winner';
import { WinnerService } from '../services/winner.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-edit-winner',
  templateUrl: './edit-winner.component.html',
  styleUrls: ['./edit-winner.component.scss']
})
export class EditWinnerComponent implements OnInit {

  listw:Winner[]=[];
  w=new Winner;
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;
    // public
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
    
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });
    
    id=''
  constructor(private wi:WinnerService,private activerouter:ActivatedRoute,private _coreTranslationService: CoreTranslationService){
    
    this._coreTranslationService.translate(english, french, arabic);
   this.activerouter.params.subscribe(data=>this.id=data.id)
   this.wi.getById(this.id).subscribe(res=>{
     console.log(res)
    this.w=res
    })
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
        headerTitle: 'Winner Edit',
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
              name: 'winner',
              isLink: true,
              link: '/'
            },
            {
              name: 'Winner Edit',
              isLink: false
            }
          ]
        }
      }
      this.wi.getAll();
      this.uploader.onAfterAddingFile = (file) => {
        file.withCredentials = false;
      };
      this.uploader.onCompleteItem =async (item: any, status: any) => {
        console.log('Uploaded File Details:', item);
          console.log(status)
          let a=JSON.parse(status);
          this.w.Image=await a.file
          if(this.w.id!=null){
    
            this.wi.edit(this.w).subscribe(data => {
              this.wi.getAll();

            });
            
          }else{
            console.log(this.w)
             this.wi.add(this.w).subscribe(data=>{
              this.wi.getAll();
            });
            
          }
      }
     
    
    };

 
    
    async Edit(){
     this.uploader.uploadAll()
     
    }
  update(){
    this.wi.edit(this.w.id).subscribe(data=>{
     console.log(data)
  });

}
}
