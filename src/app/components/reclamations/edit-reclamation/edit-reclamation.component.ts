import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { Reclamation } from '../models/reclamation';
import { ReclamationService } from '../services/reclamation.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.scss']
})
export class EditReclamationComponent implements OnInit {
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;
    // public
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  url:URL;
  id=''
  lister:Reclamation[]=[];
  r=new Reclamation;
  constructor(private re:ReclamationService,private activerouter:ActivatedRoute,private _coreTranslationService: CoreTranslationService) {

    this._coreTranslationService.translate(english, french, arabic);
    this.activerouter.params.subscribe(data=>this.id=data.id)
    this.re.getById(this.id).subscribe(res=>{
      console.log(res)
      this.r=res
    })
   }

  ngOnInit(): void {
    this.re.getAll();
  }
Edit(id:any){
  this.re.edit(this.r).subscribe(data=>{
    
    console.log(data)
    this.re.getAll();
  })
}
}
