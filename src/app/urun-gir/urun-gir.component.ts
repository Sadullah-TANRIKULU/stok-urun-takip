import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InspectionApiService } from '../inspection-api.service';

@Component({
  selector: 'app-urun-gir',
  templateUrl: './urun-gir.component.html',
  styleUrls: ['./urun-gir.component.scss']
})
export class UrunGirComponent {

  urunId: any;
  urun_adi: string = '';
  fiyat: number | string = 0;
  kategori: string = '';
  barkod: string = '';
  isUpdate: boolean = false;
  formObj: any;
  editedNewData: any;
  urunler: any[] = [];

  constructor(
    private service: InspectionApiService,
  ) {
    this.service.getUrunler().subscribe(response => {
      this.urunler = response.data;
      console.log(this.urunler);
    });
    this.urunlerGetir();
  }

  urunlerGetir() {
    this.service.getUrunler().subscribe(res => {
      this.urunler = res.data;
      // this.urunler = (res.data).sort((x: any, y: any) => {(x.kategori).localeCompare(y.kategori) });
    });
  }


  urunEkle(formObj: NgForm) {
    this.service.urunKaydet(formObj).subscribe(response => {
      this.formObj = response.data;
      this.urunlerGetir();
    });

  }

  urunSec(item: any) {
    this.barkod = item.barkod;
    this.urunId = item.id;
    this.urun_adi = item.urun_adi;
    this.fiyat = item.fiyat;
    this.kategori = item.kategori;
    this.isUpdate = true;

  }
  urunGuncelle(id: number, item: any) {

    this.service.urunGuncelle(id, item).subscribe(response => {
      console.log(response);
      item.id = response.id;
      item.barkod = response.barkod;
      item.urun_adi = response.urun_adi;
      item.fiyat = response.fiyat;
      item.kategori = response.kategori;
      this.isUpdate = false;

      this.urunlerGetir();
    });
  }



  urunSil(item: any) {
    this.service.urunSil(item.id).subscribe(response => {
      console.log(response);
      this.urunlerGetir();
    });
  }

}
