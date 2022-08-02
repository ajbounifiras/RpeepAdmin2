import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { Slider } from '../models/slider';
import { SliderService } from '../services/slider.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";

@Component({
  selector: 'app-viewslider',
  templateUrl: './viewslider.component.html',
  styleUrls: ['./viewslider.component.scss']
})
export class ViewsliderComponent implements OnInit {

  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;
  listsl: Slider[] = []
  sl = new Slider
  url: URL;
  constructor(private si: SliderService, private router: Router, private _coreTranslationService: CoreTranslationService) {

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
  getAll() {
    this.si.getAll().subscribe(data => {
      this.listsl = data;
      console.log(this.listsl);
    })
  }
  getById(id: any) {
    this.si.getById(id).subscribe(data => {
      console.log(data)
      this.sl = data
      this.router.navigate(['/sliders/edit/' + id])

    })

  }
  deleteproduct(id: any) {
    this.si.delete(id).subscribe(res => {
      alert("slider is deleted")
      this.getAll();
    });
  }

}
