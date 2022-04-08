import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './moviles/edit/edit.component';
import { MovilesComponent } from './moviles/moviles.component';

const routes: Routes = [
  {
    path: '',
    component: MovilesComponent
  },
  {
    path: "movile/add/:id",
    component: EditComponent
  },
  {
    path: 'movile/edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
