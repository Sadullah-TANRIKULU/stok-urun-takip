import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DenemeComponent } from './deneme/deneme.component';
import { InspectionApiService } from "./inspection-api.service";
import { BarkodOkumaComponent } from './barkod-okuma/barkod-okuma.component';
import { UrunGirComponent } from './urun-gir/urun-gir.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DenemeComponent,
    BarkodOkumaComponent,
    UrunGirComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [InspectionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
