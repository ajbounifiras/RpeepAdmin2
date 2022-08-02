import { Component, OnInit } from '@angular/core';
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
  selector: 'app-add-winner',
  templateUrl: './add-winner.component.html',
  styleUrls: ['./add-winner.component.scss']
})
export class AddWinnerComponent implements OnInit {
listw:Winner[]=[];
w=new Winner;
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });
  constructor(private wi:WinnerService,private _coreTranslationService: CoreTranslationService) {
    
    this._coreTranslationService.translate(english, french, arabic);
   }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Winner Add',
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
            name: 'Winner ',
            isLink: true,
            link: '/'
          },
          {
            name: 'Winner  Add',
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
  async Add(){
   this.uploader.uploadAll()
  }
  
};

