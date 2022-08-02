import { Component, OnInit } from '@angular/core';
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
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss']
})
export class AddCouponComponent implements OnInit {
  co=new Coupon;
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
 constructor(private cop:CouponService,private _coreTranslationService: CoreTranslationService) {
    
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
    headerTitle: 'Coupon Add',
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
          name: 'Coupon',
          isLink: true,
          link: '/'
        },
        {
          name: 'Coupon Add',
          isLink: false
        }
      ]
    }
  }
  this.cop.getAll();
  
   


};

async Add(){
this.cop.add(this.co).subscribe(data=>{
  console.log(data);
})
}

}
 


