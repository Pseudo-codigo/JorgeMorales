import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './layout/container/container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    component: ContainerComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
