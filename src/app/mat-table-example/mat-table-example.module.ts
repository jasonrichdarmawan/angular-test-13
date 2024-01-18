import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableExampleRoutingModule } from './mat-table-example-routing.module';
import { MatTableExampleComponent } from './mat-table-example.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    MatTableExampleComponent
  ],
  imports: [
    CommonModule,
    MatTableExampleRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule
  ],
})
export class MatTableExampleModule { }
