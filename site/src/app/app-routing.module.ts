import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'data-bowl', component: RedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
