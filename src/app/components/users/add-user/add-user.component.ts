import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'



const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;
    // public
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  listu:Utilisateur[]=[];
  u=new Utilisateur;
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });
  
  constructor(private us:UtilisateurService,private _coreTranslationService: CoreTranslationService) {

     
  this._coreTranslationService.translate(english, french, arabic);
   }

 ngOnInit(): void {
  navigator.geolocation.getCurrentPosition(position => {
    this.userLocationCenter = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }});
    this.contentHeader = {
      headerTitle: 'User Add',
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
            name: 'User',
            isLink: true,
            link: '/'
          },
          {
            name: 'User Add',
            isLink: false
          }
        ]
      }
    }
   
    this.us.getAll();
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem =async (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
        console.log(status)
        let a=JSON.parse(status);
        this.u.Image=await a.file
        if(this.u.id!=null){
  
          this.us.edit(this.u).subscribe(data => {
            this.us.getAll();

          });
          
        }else{
          console.log(this.u)
           this.us.add(this.u).subscribe(data=>{
            this.us.getAll();
          });
          
        }
    }
  
  
  };

 
  async Add(){
   this.uploader.uploadAll()
  }


};
