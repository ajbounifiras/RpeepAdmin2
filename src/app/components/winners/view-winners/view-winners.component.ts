import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { Winner } from '../models/winner';
import { WinnerService } from '../services/winner.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-view-winners',
  templateUrl: './view-winners.component.html',
  styleUrls: ['./view-winners.component.scss']
})
export class ViewWinnersComponent implements OnInit {
  // public
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  listw:Winner[]=[];
  w=new Winner;
  url: URL;
  constructor(private wi:WinnerService,private router:Router,private _coreTranslationService: CoreTranslationService) { 
    
    this._coreTranslationService.translate(english, french, arabic);
  }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Winner View',
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
            name: 'Winner',
            isLink: true,
            link: '/'
          },
          {
            name: 'Winner View',
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
 this.wi.getAll().subscribe(data=>{
   this.listw=data;
   console.log(this.listw);
 })
}
getById(id:any){
 this.wi.getById(id).subscribe(data=>{
   console.log(data)
   this.w=data
   this.router.navigate(['winners/edit/'+id])
  
 })
 
}
deleteproduct(id:any){
this.wi.delete(id).subscribe(res=>{
 alert("winner is deleted")
this.getAll();
});
}
  
   
}