import { Component, OnInit } from '@angular/core';
import { InspectionApiService } from '../inspection-api.service';
import { RaporlamaComponent } from '../raporlama/raporlama.component';

@Component({
  selector: 'app-barkod-okuma',
  templateUrl: './barkod-okuma.component.html',
  styleUrls: ['./barkod-okuma.component.scss']
})
export class BarkodOkumaComponent implements OnInit {

  barkod: string = '';
  sepetUrun: any[] = [];
  toplam: number = 0;
  fiyat: number = 0;
  item1: number = 0;
  adet: number = 0;
  constructor(private service: InspectionApiService) {
    this.service.getSepet().subscribe(res => {
      this.sepetUrun = res.data;
      this.topla();
      this.adetHesapla();

    })
  }

  topla() {
    this.toplam = 0;
    this.sepetUrun.forEach((item) => {
      this.toplam += Number(item.fiyat);
    })
  }
  adetHesapla() {
    this.service.getSepet().subscribe(response => {
      this.sepetUrun = response.data;
      this.adet = this.sepetUrun.length;
    })
  }
  
  ngOnInit(): void {

  }
  urunEkle(urun: string) {
    this.service.urunEkle(urun).subscribe(res => {
      this.sepetUrun = res.data;
      this.topla();
      this.adetHesapla();
    })
    this.barkod = '';

  }
  sepetSil(item: any) {
    this.service.sepetSil(item.uid).subscribe(response => {
      this.sepetUrun = response.data;
      this.topla();
      this.adetHesapla();
    });
  }
  siparisTamamla(id: number) {
    this.service.siparisTamamla(id).subscribe(response => {
      this.sepetUrun = [];
      this.topla();
      this.adetHesapla();
    })
  }

}
