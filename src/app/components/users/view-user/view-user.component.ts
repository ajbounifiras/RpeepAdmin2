import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  listeu:Utilisateur[]=[];
  u=new Utilisateur;
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  constructor(private us:UtilisateurService,private router:Router,private _coreTranslationService: CoreTranslationService) { 
    
    this._coreTranslationService.translate(english, french, arabic);
  }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'User View',
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
            name: 'User',
            isLink: true,
            link: '/'
          },
          {
            name: 'User View',
            isLink: false
          }
        ]
      }
    }
   
  
    this.getAll();
  };
  getAll(){
   this.us.getAll().subscribe(data=>{
     this.listeu=data;
     console.log(this.listeu);
   })
 }
 getById(id:any){
   this.us.getById(id).subscribe(data=>{
     console.log(data)
     this.u=data
     this.router.navigate(['user/edit/'+id])
    
   })
   
 }
 deleteproduct(id:any){
 this.us.delete(id).subscribe(res=>{
   alert("user is deleted")
 this.getAll();
 });
 }
    
     
 
 }
  
  
    
  
  
  