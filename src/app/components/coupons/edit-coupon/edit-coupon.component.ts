import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
import { Coupon } from '../models/coupon';
import { CouponService } from '../services/coupon.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.scss']
})
export class EditCouponComponent implements OnInit {

  listco:Coupon[]=[];
  co=new Coupon;
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;
    // public
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
    
  public uploader: FileUploader = new FileUploader({
    url: URL,
  
  });
    
  isOffer = false;
  isDraw = true;
    id=''
  constructor(private cop:CouponService,private activerouter:ActivatedRoute,private _coreTranslationService: CoreTranslationService){


    this._coreTranslationService.translate(english, french, arabic);
   this.activerouter.params.subscribe(data=>this.id=data.id)
   this.cop.getById(this.id).subscribe(res=>{
     console.log(res)
     this.co=res
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
      this.cop.getAll();
   
   
  }
     update(){
    this.cop.edit(this.co).subscribe(data=>{
      this.co=data
     console.log(data)
  });

}
}



