import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarkodOkumaComponent } from './barkod-okuma/barkod-okuma.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RaporlamaComponent } from './raporlama/raporlama.component';
import { AuthGuard } from './shared/auth.guard';
import { UrunGirComponent } from './urun-gir/urun-gir.component';


const routes: Routes = [
  // { path: '', redirectTo: '/loginForm', pathMatch : 'full' },
  { path: '', component: LoginFormComponent, canActivate: [AuthGuard] },
  { path: 'urunGir', component: UrunGirComponent, canActivate:[AuthGuard] },
  { path: 'raporlama', component: RaporlamaComponent, canActivate:[AuthGuard] },
  { path: 'barkodOkuma', component: BarkodOkumaComponent, canActivate:[AuthGuard] },

  { path: '**' , component : LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// https://seegatesite.com/login-form-angular-4-tutorial-for-beginner/
