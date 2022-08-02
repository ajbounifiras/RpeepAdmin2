import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { Prize } from '../models/prize';
import { PrizeService } from '../services/prize.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-view-prizes',
  templateUrl: './view-prizes.component.html',
  styleUrls: ['./view-prizes.component.scss']
})
export class ViewPrizesComponent implements OnInit {
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  listp:Prize[]=[];
  p=new Prize;
  url: URL;

  constructor(private prot:PrizeService,private router:Router,private _coreTranslationService: CoreTranslationService) {
    this._coreTranslationService.translate(english, french, arabic);
   }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Prize View',
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
            name: 'Prize View',
            isLink: false
          }
        ]
      }
    }
    this.getAll();
 };
 getAll(){
  this.prot.getAll().subscribe(data=>{
    this.listp=data;
    console.log(this.listp);
  })
}
getById(id:any){
  this.prot.getById(id).subscribe(data=>{
    console.log(data)
    this.p=data
    this.router.navigate(['prizes/edit/',+id])
   
  })
  
}
deleteproduct(id:any){
this.prot.delete(id).subscribe(res=>{
  alert("prize is deleted")
this.getAll();
});
}
   
    

}
 
 
   
  

