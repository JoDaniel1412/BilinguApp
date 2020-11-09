import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements AfterViewInit  {

  @Input() title = 'Title';
  @Input() displayedColumns: string[];
  @Input() dataSource: MatTableDataSource<any>;
  @Input() rowsPerPage: number[] = [5];
  @Input() hasFilter = false;
  @Input() hasDate = true;
  @Input() filterName: string;
  @Input() filterOptions: string[];

  @Output() filterEmitter = new EventEmitter<{startDate: Date, endDate: Date, options?: string}>();

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  notToday = new FormControl(new Date(2015, 0));
  today = new FormControl(new Date());
  startDate: Date;
  endDate: Date;
  filterSelected: string;

  constructor() { }

  public refreshData() {
    this.table.renderRows();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.startDate = this.notToday.value;
    this.endDate = this.today.value;

    setTimeout(() => this.emitChanges(), 2000);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  startDateChange(event) {
    this.startDate = event.value;
    this.emitChanges();
  }

  endDateChange(event) {
    this.endDate = event.value;
    this.emitChanges();
  }

  // Sends changes in the date and options filter to the parent
  emitChanges() {
    this.filterEmitter.emit({
      startDate: this.startDate,
      endDate: this.endDate,
      options: this.filterSelected});
  }

  /**
   * Converts each key of the object into a value from an array
   * @param obj Object
   * @param i Index
   * @return The object key from the position i
   */
  getKeyFromObject(obj: any, i: number) {
    const arr = [];
    Object.keys(obj).map(function(key) {
      arr.push(obj[key]);
      return arr;
    });
    return arr[i];
  }
}
