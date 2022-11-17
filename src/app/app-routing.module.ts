import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarkodOkumaComponent } from './barkod-okuma/barkod-okuma.component';
import { UrunGirComponent } from './urun-gir/urun-gir.component';


const routes: Routes = [
  { path: 'urunGir', component: UrunGirComponent },
  { path: 'barkodOkuma', component: BarkodOkumaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
