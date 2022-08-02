
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Winner } from '../models/winner';




@Injectable({
  providedIn: 'root'
})
export class WinnerService {

Url:string="http://localhost:3000/posts";

  constructor(private _http:HttpClient) {}
   
  
  getById(id:any){
    return this._http.get<Winner>(`${this.Url}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
   getAll(){
      return this._http.get<Winner[]>(this.Url)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
    add(Winner:any){
      return this._http.post<Winner>(this.Url,Winner)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
  
    edit(Winner:any){
      return this._http.put<Winner>(`${this.Url}/${Winner.id}`, Winner)
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
