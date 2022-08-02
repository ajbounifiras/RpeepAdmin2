import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  listpro:Product[]=[];
  pro=new Product;
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
  constructor(private prot:ProductService,private toastr: ToastrService,private activerouter:ActivatedRoute,private _coreTranslationService: CoreTranslationService){
    
    this._coreTranslationService.translate(english, french, arabic);
   this.activerouter.params.subscribe(data=>{
    console.log(this.id=data.id)
   })
   this.prot.getById(this.id).subscribe(res=>{
     console.log(res)
    this.pro=res})
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
        headerTitle: 'Product Edit',
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
              name: 'Product',
              isLink: true,
              link: '/'
            },
            {
              name: 'Product Edit',
              isLink: false
            }
          ]
        }
      }
      this.prot.getAll();
      this.uploader.onAfterAddingFile = (file) => {
        file.withCredentials = false;
      };
      this.uploader.onCompleteItem =async (item: any, status: any) => {
        console.log('Uploaded File Details:', item);
          console.log(status)
          let a=JSON.parse(status);
          this.pro.Image=await a.file
          
    
            this.prot.edit(this.pro).subscribe(data => {
              this.prot.getAll();

            });
            
          
            
          
      }
        this.toastr.success('File successfully uploaded!');
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
    this.prot.edit(this.pro.id).subscribe(data=>{
     console.log(data)
  });

}
}
