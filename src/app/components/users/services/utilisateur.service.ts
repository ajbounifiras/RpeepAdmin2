import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  Url:string="http://localhost:3000/posts";

  constructor(private _http:HttpClient) {}
   
  
  getById(id:any){
    return this._http.get<Utilisateur>(`${this.Url}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
   getAll(){
      return this._http.get<Utilisateur[]>(this.Url)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
    add(Utilisateur:any){
      return this._http.post<Utilisateur>(this.Url,Utilisateur)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
  
    edit(Utilisateur:any){
      return this._http.put<Utilisateur>(`${this.Url}/${Utilisateur.id}`, Utilisateur)
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


