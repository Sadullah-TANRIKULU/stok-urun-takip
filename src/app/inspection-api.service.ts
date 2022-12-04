import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly satisAPIUrl = "https://api.istanbulhairstudio.co.uk/";

  constructor(private http: HttpClient) { }  

  // ÜRÜN GİR/SİL METOTLARI
  getUrunler(): Observable<any> { 
    return this.http.get<any>(this.satisAPIUrl + `satis/urunler`);
  };
  urunKaydet(body: any): Observable<any> { 
    return this.http.post<any>(this.satisAPIUrl + `satis/urunKaydet`, body);
  };
  urunGuncelle(id: number, body: any): Observable<any> { 
    return this.http.put<any>(this.satisAPIUrl + `satis/urunGuncelle/` + id, body);
  };
  urunSil(id: number): Observable<any> {
    return this.http.delete<any>(this.satisAPIUrl + `satis/urunSil/${id}`);
  };

  // BARKOD OKUTMA METOTLARI
  getSepet(): Observable<any> { 
    return this.http.get<any>(this.satisAPIUrl + `satis/sepet`);
  };
  sepetSil(id: number): Observable<any> {
    return this.http.delete<any>(this.satisAPIUrl + `satis/sepetId/${id}`);
  };
  urunEkle(urun: any): Observable<any> {  
    return this.http.post<any>(this.satisAPIUrl + `satis/urunEkle`, urun);
  };
  siparisTamamla(id: number): Observable<any> {
    return this.http.put<any>(this.satisAPIUrl + `satis/siparisVer/${id}`, {});
  };

  // RAPORLAMA METOTLARI
  getRapor1(): Observable<any> { 
    return this.http.get<any>(this.satisAPIUrl + `satis/rapor1`);
  };
  getRapor2(): Observable<any> { 
    return this.http.get<any>(this.satisAPIUrl + `satis/rapor2`);
  };

}
