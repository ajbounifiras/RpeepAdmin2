import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-viewproducts',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewproductsComponent implements OnInit {

   // public
   public contentHeader: object;
   public breadcrumbChevron: Breadcrumb;
   listpro:Product[]=[];
   pro=new Product;
   url: URL;
   constructor(private prot:ProductService,private router:Router,private _coreTranslationService: CoreTranslationService) {
        
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
  this.prot.getAll().subscribe(data=>{
    this.listpro=data;
    console.log(this.listpro);
  })
}
getById(id:any){
  this.prot.getById(id).subscribe(data=>{
    console.log(data)
    this.pro=data
    this.router.navigate(['/products/edit/'+id])
   
  })
  
}
deleteproduct(id:any){
this.prot.delete(id).subscribe(res=>{
  alert("product is deleted")
this.getAll();
});
}
   
    

}
 
 
   
 
 
 