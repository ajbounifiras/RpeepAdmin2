import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pub } from '../models/pub';

@Injectable({
  providedIn: 'root'
})
export class PubService {
  Url:string="http://localhost:3000/posts";
  constructor(private _http:HttpClient) { }

  getById(id:any){
    return this._http.get<Pub>(`${this.Url}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
   getAll(){
      return this._http.get<Pub[]>(this.Url)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
    add(Pub:any){
      return this._http.post<Pub>(this.Url,Pub)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
  
    edit(Pub:any){
      return this._http.put<Pub>(`${this.Url}/${Pub.id}`, Pub)
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
