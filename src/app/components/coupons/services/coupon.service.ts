import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Coupon } from '../models/coupon';
@Injectable({
  providedIn: 'root'
})
export class CouponService {
  Url:string="http://localhost:3000/posts";
  constructor(private _http:HttpClient) { }

  getById(id:any){
    return this._http.get<Coupon>(`${this.Url}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
   getAll(){
      return this._http.get<Coupon[]>(this.Url)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
    add(Coupon:any){
      return this._http.post<Coupon>(this.Url,Coupon)
      .pipe(map((res:any)=>{
        return res;
      }));;
    }
  
    edit(Coupon:any){
      return this._http.put<Coupon>(`${this.Url}/${Coupon.id}`, Coupon)
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
