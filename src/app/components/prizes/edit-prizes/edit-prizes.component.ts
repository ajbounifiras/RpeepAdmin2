import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-edit-prizes',
  templateUrl: './edit-prizes.component.html',
  styleUrls: ['./edit-prizes.component.scss']
})
export class EditPrizesComponent implements OnInit {
  listp:Prize[]=[];
  p=new Prize;
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
  constructor(private prott:PrizeService,private activerouter:ActivatedRoute,private _coreTranslationService: CoreTranslationService){

    this._coreTranslationService.translate(english, french, arabic);
   this.activerouter.params.subscribe(data=>this.id=data.id)
   this.prott.getById(this.id).subscribe(res=>{
     console.log(res)
    this.p=res
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
      headerTitle: 'Prize Edit',
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
            name: 'Prize Edit',
            isLink: false
          }
        ]
      }
    }
    this.prott.getAll();
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem =async (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
        console.log(status)
        let a=JSON.parse(status);
        this.p.Image=await a.file
        if(this.p.id!=null){
  
          this.prott.edit(this.p).subscribe(data => {
            this.prott.getAll();

          });
          
        }else{
          console.log(this.p)
           this.prott.add(this.p).subscribe(data=>{
            this.prott.getAll();
          });
          
        }
    }
  
    /***/
   //this.DrawDate();
  
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
  this.prott.edit(this.p).subscribe(data=>{
  
   console.log(data)
});

}
}



