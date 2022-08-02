import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { Coupon } from '../models/coupon';
import { CouponService } from '../services/coupon.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'

@Component({
  selector: 'app-view-coupons',
  templateUrl: './view-coupons.component.html',
  styleUrls: ['./view-coupons.component.scss']
})
export class ViewCouponsComponent implements OnInit {
  // public
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  listco:Coupon[]=[];
  co=new Coupon;
  url: URL;
  constructor(private cop:CouponService,private router:Router,private _coreTranslationService: CoreTranslationService) { 
    this._coreTranslationService.translate(english, french, arabic);
  }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Product View',
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
            name: 'Product View',
            isLink: false
          }
        ]
      }
    },
    this.breadcrumbChevron = {
      type: 'chevron',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
          
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: true,
          link: '/'

        }
      ]
    };
  this.getAll();
};
getAll(){
 this.cop.getAll().subscribe(data=>{
   this.listco=data;
   console.log(this.listco);
 })
}
getById(id:any){
 this.cop.getById(id).subscribe(data=>{
   console.log(data)
   this.co=data
   this.router.navigate(['coupons/edit/'+id])
  
 })
 
}
deletecoupon(id:any){
this.cop.delete(id).subscribe(res=>{
 alert("coupon is deleted")
this.getAll();
});
}
  
   

}


  


