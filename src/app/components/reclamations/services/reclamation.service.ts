import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  Url:string="http://localhost:3000/posts";

  constructor(private _http:HttpClient) {}
   
  
  getById(id:any){
    return this._http.get<Reclamation>(`${this.Url}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
   getAll(){
      return this._http.get<Reclamation[]>(this.Url)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
    add(Reclamation:any){
      return this._http.post<Reclamation>(this.Url,Reclamation)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
  
    edit(Reclamation:any){
      return this._http.put<Reclamation>(`${this.Url}/${Reclamation.id}`, Reclamation)
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

