import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';

const routes: Routes = [
  { path: "", redirectTo: "/page1", pathMatch: "full"},
  { path: "page1", component: PageOneComponent },
  { path: "page2", component: PageTwoComponent },
  { path: "**", redirectTo: "/page2", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
