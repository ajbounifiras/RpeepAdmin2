
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Url:string="http://localhost:3000/posts";

  constructor(private _http:HttpClient) {}
   
  
  getById(id:any){
    return this._http.get<Product>(`${this.Url}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
   getAll(){
      return this._http.get<Product[]>(this.Url)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
    add(Product:any){
      return this._http.post<Product>(this.Url,Product)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
  
    edit(Product:any){
      return this._http.put<Product>(`${this.Url}/${Product.id}`, Product)
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
