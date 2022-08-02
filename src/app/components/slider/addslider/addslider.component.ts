import { Component, OnInit } from '@angular/core';
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
  selector: 'app-addslider',
  templateUrl: './addslider.component.html',
  styleUrls: ['./addslider.component.scss']
})
export class AddsliderComponent implements OnInit {
  sl = new Slider

  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;
  // public
  public contentHeader: object;
  public breadcrumbChevron: Breadcrumb;

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });
  constructor(private si: SliderService, private _coreTranslationService: CoreTranslationService) {

    this._coreTranslationService.translate(english, french, arabic);
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
      headerTitle: 'Slider Add',
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
            name: 'Slider Add',
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



      console.log(this.sl)
      this.si.add(this.sl).subscribe(data => {
        this.si.getAll();
      });


    }

    /***/
    //this.DrawDate();

  };


  async Add() {
    this.uploader.uploadAll()
  }

}
