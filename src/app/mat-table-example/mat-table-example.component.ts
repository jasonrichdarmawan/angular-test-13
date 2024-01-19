import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  {position: 21, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 22, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 23, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 24, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 25, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 26, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 27, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 28, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 29, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 30, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  {position: 31, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 32, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 33, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 34, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 35, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 36, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 37, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 38, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 39, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 40, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-mat-table-example',
  templateUrl: './mat-table-example.component.html',
  styleUrls: ['./mat-table-example.component.scss']
})
export class MatTableExampleComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<PeriodicElement>(this.allowMultiSelect, this.initialSelection);
  clickedRows = new Set<PeriodicElement>();

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    ) {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // this.dataSource.filter = "123"
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  get totalWeight(): string {
    return this.dataSource.data.reduce((acc, row) => acc + row.weight, 0).toFixed(2);
  }

  get totalPeriodicElements(): number {
    return this.dataSource.data.length;
  }
}
