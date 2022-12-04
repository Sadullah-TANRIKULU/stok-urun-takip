import { Component, OnInit } from '@angular/core';
import { InspectionApiService } from '../inspection-api.service';

@Component({
  selector: 'app-raporlama',
  templateUrl: './raporlama.component.html',
  styleUrls: ['./raporlama.component.scss']
})
export class RaporlamaComponent implements OnInit {
  rapor1: any[] = [];
  rapor2: any[] = [];
  constructor(
private service: InspectionApiService

  ) { 
    
    this.service.getRapor1().subscribe(response => {
      this.rapor1 = response.data;
    })
      
    this.service.getRapor2().subscribe(response => {
      this.rapor2 = response.data;
    })
  }
 
  ngOnInit(): void {

  }

}
