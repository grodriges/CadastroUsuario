import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ListaCadastro',
  templateUrl: './ListaCadastro.component.html',
  styleUrls: ['./ListaCadastro.component.css']
})
// export class TableStickyColumnsExample {
//   displayedColumns =
//       ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// }

export class ListaCadastroComponent implements OnInit {
  displayedColumns =
        ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol'];
    dataSource: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.http.get('http://localhost:5000/api/cadastro').subscribe(response => {
      this.dataSource = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

