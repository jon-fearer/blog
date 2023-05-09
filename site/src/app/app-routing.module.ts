import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'data-bowl', component: RedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
