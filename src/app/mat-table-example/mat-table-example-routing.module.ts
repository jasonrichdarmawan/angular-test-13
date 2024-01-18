import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableExampleComponent } from './mat-table-example.component';

const routes: Routes = [
  {
    path: '',
    component: MatTableExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatTableExampleRoutingModule { }
