import { Component, OnInit, Output } from '@angular/core';
import { InspectionApiService } from '../inspection-api.service';

@Component({
  selector: 'app-raporlama',
  templateUrl: './raporlama.component.html',
  styleUrls: ['./raporlama.component.scss']
})
export class RaporlamaComponent implements OnInit {
  rapor1: any[] = [];
  rapor2: any[] = [];
  toplam1: number = 0;
  toplam2: number = 0;

  constructor(
private service: InspectionApiService

  ) { 
    
    this.service.getRapor1().subscribe(response => {
      this.rapor1 = response.data;})
      console.log(this.rapor1);
    this.service.getRapor2().subscribe(response => {
      this.rapor2 = response.data;})
      console.log(this.rapor2);
      this.topla1();
      this.topla2();
  }
  // genel satış toplamı raporu

  @Output() topla1() {
    this.toplam1 = 0;
    this.rapor1.forEach((item) => {
      console.log(item);
      
      this.toplam1 += Number(item.fiyat);
    });
  }

  // sipariş toplamı raporu

  @Output() topla2() {
    this.toplam2 = 0;
    this.rapor2.forEach((item) => {
      console.log(item);
      
      this.toplam2 = Number(item.toplam);
    });
  }

  ngOnInit(): void {
  }

}
