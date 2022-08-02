import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
import { Pub } from '../models/pub';
import { PubService } from '../services/pub.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-editpub',
  templateUrl: './editpub.component.html',
  styleUrls: ['./editpub.component.scss']
})
export class EditpubComponent implements OnInit {
p=new Pub

public userLocationZoom = 15;
public userLocationCenter: google.maps.LatLngLiteral;
  // public
public contentHeader: object;
public breadcrumbChevron: Breadcrumb;
  
public uploader: FileUploader = new FileUploader({
  url: URL,
  itemAlias: 'image',
});
  
isOffer = false;
isDraw = true;
  id=''
  constructor(private pu:PubService,private activerouter:ActivatedRoute,private _coreTranslationService: CoreTranslationService) { 


    this._coreTranslationService.translate(english, french, arabic);
    
    this.activerouter.params.subscribe(data=>{
      console.log(this.id=data.id)
     })
     this.pu.getById(this.id).subscribe(res=>{
       console.log(res)
      this.p=res})
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
      headerTitle: 'Pub Edit',
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
            name: 'Pub',
            isLink: true,
            link: '/'
          },
          {
            name: 'Pub Edit',
            isLink: false
          }
        ]
      }
    }
    this.pu.getAll();
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem =async (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
        console.log(status)
        let a=JSON.parse(status);
        this.p.image=await a.file
        
  
          this.pu.edit(this.p).subscribe(data => {
            this.pu.getAll();

          });
          
        
          
        
    }
     
  
  };

  DrawDate():void{
    //alert("draw");
    this.isDraw = true;
    this.isOffer = false;
  }
  
  ClosingDate():void{
    //alert("offer");
    this.isDraw = false;
    this.isOffer = true;
  }
  
  async Edit(){
   this.uploader.uploadAll()
   
  }
update(){
  this.pu.edit(this.p.id).subscribe(data=>{
   console.log(data)
});

}

}
