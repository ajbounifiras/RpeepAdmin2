import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
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
    
  constructor(private prot:ProductService,private _coreTranslationService: CoreTranslationService){
    
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
        headerTitle: 'Product Add',
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
              name: 'Product Add',
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
      
            
         
            console.log(this.pro)
             this.prot.add(this.pro).subscribe(data=>{
              this.prot.getAll();
            });
            
          
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
    async Add(){
     this.uploader.uploadAll()
    }
 

} 

