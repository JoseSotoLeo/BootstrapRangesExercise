import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exercise1Component } from './components/exercise1/exercise1.component';
import { Exercise2Component } from './components/exercise2/exercise2.component';
import { HomeComponent } from './components/home/home.component';
import { NgcRangeComponent } from './components/ngc-range/ngc-range.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'exercise1', component: Exercise1Component},
  {path: 'exercise2', component: Exercise2Component},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})






export class AppRoutingModule { }
