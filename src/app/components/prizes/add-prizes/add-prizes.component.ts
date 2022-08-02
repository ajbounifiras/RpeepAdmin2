import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
import { Prize } from '../models/prize';
import { PrizeService } from '../services/prize.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";

@Component({
  selector: 'app-add-prizes',
  templateUrl: './add-prizes.component.html',
  styleUrls: ['./add-prizes.component.scss']
})
export class AddPrizesComponent implements OnInit {
  listp:Prize[]=[];
  pro=new Prize;
 
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;
    // public
    public contentHeader: object;
    public breadcrumbChevron: Breadcrumb;
    
    public uploader: FileUploader = new FileUploader({
      url: URL,
      itemAlias: 'image',
    });
    

    
    constructor(private pr:PrizeService,private _coreTranslationService: CoreTranslationService){
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
        headerTitle: 'Prize Add',
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
              name: 'Prize',
              isLink: true,
              link: '/'
            },
            {
              name: 'Prize Add',
              isLink: false
            }
          ]
        }
      }
      this.pr.getAll();
      this.uploader.onAfterAddingFile = (file) => {
        file.withCredentials = false;
      };
      this.uploader.onCompleteItem =async (item: any, status: any) => {
        console.log('Uploaded File Details:', item);
          console.log(status)
          let a=JSON.parse(status);
          this.pro.Image=await a.file
          if(this.pro.id!=null){
    
            this.pr.edit(this.pro).subscribe(data => {
              this.pr.getAll();

            });
            
          }else{
            console.log(this.pro)
             this.pr.add(this.pro).subscribe(data=>{
              this.pr.getAll();
            });
            
          }
      }
    
    
    };

    async Add(){
     this.uploader.uploadAll()
    }
 

} 
    


