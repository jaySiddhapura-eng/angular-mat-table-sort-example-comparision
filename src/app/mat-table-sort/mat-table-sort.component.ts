// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { Employee } from '../model/employee';
// import { EmpFilter, filterOption } from '../model/empfilter';
// import { MatSelectChange } from '@angular/material/select';
// import { MatSort, Sort } from '@angular/material/sort';

// @Component({
//   selector: 'app-mat-table-sort',
//   templateUrl: './mat-table-sort.component.html',
//   styleUrls: ['./mat-table-sort.component.scss'],
// })
// export class MatTableSortComponent implements OnInit {
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   // Columns displayed in the table
//   displayedColumns: string[] = ['name', 'age', 'position'];

//   // Data for the table
//   dataSource = new MatTableDataSource(ELEMENT_DATA);

//   // Form inputs for sorting
//   sortColumn: string = '';
//   sortDirection: 'asc' | 'desc' | '' = 'asc';

//   // ViewChild to access MatSort directive
//   @ViewChild(MatSort) sort!: MatSort;

//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//   }

//   // Functions to set sort column and direction
//   setSortColumn(column: string) {
//     this.sortColumn = column;
//     console.log(`Selected column: ${column}`);
//   }

//   setSortDirection(direction: 'asc' | 'desc' | '') {
//     this.sortDirection = direction;
//     console.log(`Selected direction: ${direction}`);
//   }

//   // Function to programmatically apply sorting based on form input
//   onApplySort() {
//     if (
//       this.sortColumn &&
//       (this.sortDirection === 'asc' || this.sortDirection === 'desc')
//     ) {
//       this.sort.sort({
//         id: this.sortColumn,
//         start: this.sortDirection,
//         disableClear: false,
//       });
//       console.log(
//         `Sorting applied to column: ${this.sortColumn}, direction: ${this.sortDirection}`
//       );
//     } else {
//       console.log('Invalid column or direction input');
//     }
//   }
// }

// const ELEMENT_DATA = [
//   { name: 'John', age: 25, position: 'Developer' },
//   { name: 'Anna', age: 30, position: 'Designer' },
//   { name: 'Mike', age: 35, position: 'Manager' },
//   { name: 'Sophie', age: 28, position: 'Analyst' },
//   { name: 'Tom', age: 40, position: 'CEO' },
// ];

///////////////////////////////////////////////////////////////////////////////////////////////////

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../model/employee';
import { EmpFilter, filterOption } from '../model/empfilter';
import { MatSelectChange } from '@angular/material/select';
import { MatSort, Sort } from '@angular/material/sort';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-mat-table-sort',
  templateUrl: './mat-table-sort.component.html',
  styleUrls: ['./mat-table-sort.component.scss'],
})
export class MatTableSortComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();
  // Form inputs for sorting
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' | '' = 'asc';
  @ViewChild(MatSort) sort!: MatSort;

  // Functions to set sort column and direction
  setSortColumn(column: string) {
    this.sortColumn = column;
    console.log(`Selected column: ${column}`);
  }

  setSortDirection(direction: 'asc' | 'desc' | '') {
    this.sortDirection = direction;
    console.log(`Selected direction: ${direction}`);
  }

  // Function to programmatically apply sorting based on form input
  onApplySort() {
    if (
      this.sortColumn &&
      (this.sortDirection === 'asc' || this.sortDirection === 'desc')
    ) {
      this.sort.sort({
        id: this.sortColumn,
        start: this.sortDirection,
        disableClear: false,
      });
      console.log(
        `Sorting applied to column: ${this.sortColumn}, direction: ${this.sortDirection}`
      );
    } else {
      console.log('Invalid column or direction input');
    }
  }
}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
