import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Slider } from '../models/slider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  Url:string="http://localhost:3000/posts";
  constructor(private _http:HttpClient) { }

  getById(id:any){
    return this._http.get<Slider>(`${this.Url}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
   getAll(){
      return this._http.get<Slider[]>(this.Url)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
    add(Slider:any){
      return this._http.post<Slider>(this.Url,Slider)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
  
    edit(Slider:any){
      return this._http.put<Slider>(`${this.Url}/${Slider.id}`, Slider)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
  
    delete(id:any){
      return this._http.delete(`${this.Url}/${id}`)
      .pipe(map((res:any)=>{
        return res;
      }));
    }
}
