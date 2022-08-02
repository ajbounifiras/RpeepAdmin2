import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { Reclamation } from '../models/reclamation';
import { ReclamationService } from '../services/reclamation.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-view-reclamations',
  templateUrl: './view-reclamations.component.html',
  styleUrls: ['./view-reclamations.component.scss']
})
export class ViewReclamationsComponent implements OnInit {
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  listr:Reclamation[]=[];
  r=new Reclamation;
  url:URL;
  constructor(private re:ReclamationService,private router:Router,private _coreTranslationService: CoreTranslationService) {
    
    this._coreTranslationService.translate(english, french, arabic);
   }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'complaint View',
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
            name: 'complaint',
            isLink: true,
            link: '/'
          },
          {
            name: 'complaint View',
            isLink: false
          }
        ]
      }
    }
    this.getAll();
  };
  getAll(){
   this.re.getAll().subscribe(data=>{
     this.listr=data;
     console.log(this.listr);
   })
 }
 getById(id:any){
   this.re.getById(id).subscribe(data=>{
     console.log(data)
     this.r=data
     this.router.navigate(['reclamations/edit/'+id])
    
   })
   
 }
 deleteproduct(id:any){
 this.re.delete(id).subscribe(res=>{
   alert("reclamation is deleted")
 this.getAll();
 });
 }  
  
};

