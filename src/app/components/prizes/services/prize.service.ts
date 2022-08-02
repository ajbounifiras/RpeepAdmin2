import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Prize } from '../models/prize';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {
  Url:string="http://localhost:3000/posts";

  constructor(private _http:HttpClient) {}
   
  
  getById(id:any){
    return this._http.get<Prize>(`${this.Url}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
   getAll(){
      return this._http.get<Prize[]>(this.Url)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
    add(Prize:any){
      return this._http.post<Prize>(this.Url,Prize)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
  
    edit(Prize:any){
      return this._http.put<Prize>(`${this.Url}/${Prize.id}`, Prize)
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

 

