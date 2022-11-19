import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly satisAPIUrl = "https://api.istanbulhairstudio.co.uk/";

  constructor(private http: HttpClient) { }  

  getUrunler(): Observable<any> { 
    return this.http.get<any>(this.satisAPIUrl + `satis/urunler`);
  };
  getSepet(): Observable<any> { 
    return this.http.get<any>(this.satisAPIUrl + `satis/sepet`);
  };

  urunKaydet(body: any): Observable<any> { 
    return this.http.post<any>(this.satisAPIUrl + `satis/urunKaydet`, body);
  };

  urunGuncelle(id: number, body: any): Observable<any> { 
    return this.http.put<any>(this.satisAPIUrl + `satis/urunGuncelle/` + id, body);
  };

  urunSil(id: number): Observable<any> {
    return this.http.delete<any>(this.satisAPIUrl + `satis/urunSil/${id}`);
  }
  sepetSil(id: number): Observable<any> {
    return this.http.delete<any>(this.satisAPIUrl + `satis/sepetSil/${id}`);
  }
  urunEkle(urun: any): Observable<any> {  
    return this.http.post<any>(this.satisAPIUrl + `satis/urunEkle`, urun);
  }
  siparisTamamla(): Observable<any> {
    return this.http.delete<any>(this.satisAPIUrl + `satis/sepetId`);
  }

}
