import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatisticComponent} from './statistic/statistic.component';
import {ActionComponent} from './action/action.component';

const routes: Routes = [
  {path: '', component: StatisticComponent},
  {path: 'action', component: ActionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
