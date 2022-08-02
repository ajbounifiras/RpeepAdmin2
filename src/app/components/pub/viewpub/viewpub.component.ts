import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { Pub } from '../models/pub';
import { PubService } from '../services/pub.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-viewpub',
  templateUrl: './viewpub.component.html',
  styleUrls: ['./viewpub.component.scss']
})
export class ViewpubComponent implements OnInit {

  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
listp:Pub[]=[]
p=new Pub
url: URL;
show=true
inshow=false
  constructor(private pu:PubService,private router:Router,private _coreTranslationService: CoreTranslationService) {

    this._coreTranslationService.translate(english, french, arabic);
   }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Pub View',
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
            name: 'Pub View',
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
 this.pu.getAll().subscribe(data=>{
   this.listp=data;
   console.log(this.listp);
 })
}
getById(id:any){
 this.pu.getById(id).subscribe(data=>{
   console.log(data)
   this.p=data
   this.router.navigate(['/pubs/edit/'+id])
  
 })
 
}
deleteproduct(id:any){
this.pu.delete(id).subscribe(res=>{
 alert("product is deleted")
this.getAll();
});
}
  
   


}
