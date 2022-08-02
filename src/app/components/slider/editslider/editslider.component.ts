import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { FileUploader } from 'ng2-file-upload';
import { Slider } from '../models/slider';
import { SliderService } from '../services/slider.service';
import { CoreTranslationService } from '@core/services/translation.service'
import { locale as english } from '../i18n/en'
import { locale as french } from '../i18n/fr'
import { locale as arabic } from '../i18n/ar'
const URL = "http://localhost:3000/posts";
@Component({
  selector: 'app-editslider',
  templateUrl: './editslider.component.html',
  styleUrls: ['./editslider.component.scss']
})
export class EditsliderComponent implements OnInit {

  sl = new Slider
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;

  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });
  id = ''
  constructor(private si: SliderService, private activerouter: ActivatedRoute, private _coreTranslationService: CoreTranslationService) {


    this._coreTranslationService.translate(english, french, arabic);
    this.activerouter.params.subscribe(data => {
      console.log(this.id = data.id)
    })
    this.si.getById(this.id).subscribe(res => {
      console.log(res)
      this.sl = res
    })
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
      headerTitle: 'Slider Edit',
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
            name: 'Slider',
            isLink: true,
            link: '/'
          },
          {
            name: 'Slider Edit',
            isLink: false
          }
        ]
      }
    }
    this.si.getAll();
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = async (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      console.log(status)
      let a = JSON.parse(status);
      this.sl.image = await a.file


      this.si.edit(this.sl).subscribe(data => {
        this.si.getAll();

      });
    };
  }
  async Edit() {
    this.uploader.uploadAll()

  }
  update() {
    this.si.edit(this.sl.id).subscribe(data => {
      console.log(data)
    });

  }

}
