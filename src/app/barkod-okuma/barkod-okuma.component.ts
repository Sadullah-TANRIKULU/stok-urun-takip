import { Component, OnInit } from '@angular/core';
import { InspectionApiService } from '../inspection-api.service';

@Component({
  selector: 'app-barkod-okuma',
  templateUrl: './barkod-okuma.component.html',
  styleUrls: ['./barkod-okuma.component.scss']
})
export class BarkodOkumaComponent implements OnInit {

   barkod: string ='';
   sepetUrun: any[] = [];
   toplam: number = 0;
   fiyat: number = 0;
  constructor(private service: InspectionApiService) {
    this.service.getSepet().subscribe(res => {
      this.sepetUrun = res.data;
      console.log(this.sepetUrun);
      this.topla();
      
    })
   }

   topla() {
    this.toplam = 0;
    this.sepetUrun.forEach((item) => {
      this.toplam += Number(item.fiyat);
    })
   }

  ngOnInit(): void {
  }
  urunEkle(urun: string){
    console.log(urun);
    this.service.urunEkle(urun).subscribe(res =>{
      console.log(res);
      this.sepetUrun = res.data;
      this.topla();
    })

  }
  sepetSil(item: any) {
    this.service.sepetSil(item.uid).subscribe(response => {
      this.sepetUrun = response.data;
      this.topla();
    });
  }
  
}
