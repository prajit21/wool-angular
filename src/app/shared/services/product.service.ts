import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { product } from '../interface/e-commerce';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  public isOpenFilter: boolean = false;
  public listView: boolean = false;
  public gridView: boolean = true;
  public col_xl_6: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_4: boolean = false;
  public col_xl_3: boolean = true;
  public col_sm_3: boolean = true;
  public col_xl_2: boolean = false;
  public col_xl_12: boolean = false;

  products(): Observable<product> {
    return this.http.get<product>('assets/json/product.json').pipe(
      map(res => {
        return res;
      }),
    );
  }

  gridOpen() {
    this.gridView = true;
    this.col_xl_3 = true;
    this.col_sm_3 = true;
    this.listView = false;
    this.col_xl_6 = false;
    this.col_sm_6 = false;
    this.col_xl_4 = false;
    this.col_sm_4 = false;
    this.col_xl_2 = false;
    this.col_xl_12 = false;
  }

  listOpen() {
    this.listView = true;
    this.col_xl_12 = true;
    this.gridView = false;
    this.col_xl_3 = false;
    this.col_sm_3 = false;
    this.col_xl_6 = false;
    this.col_sm_6 = false;
    this.col_xl_4 = false;
    this.col_sm_4 = false;
    this.col_xl_2 = false;
  }

  grid2() {
    this.gridView = true;
    this.col_xl_6 = true;
    this.col_sm_6 = true;
    this.col_xl_3 = false;
    this.col_sm_3 = false;
    this.listView = false;
    this.col_xl_4 = false;
    this.col_sm_4 = false;
    this.col_xl_2 = false;
    this.col_xl_12 = false;
  }

  grid3() {
    this.gridView = true;
    this.col_xl_4 = true;
    this.col_sm_4 = true;
    this.col_xl_6 = false;
    this.col_sm_6 = false;
    this.col_xl_3 = false;
    this.col_sm_3 = false;
    this.listView = false;
    this.col_xl_2 = false;
    this.col_xl_12 = false;
  }

  grid4() {
    this.gridView = true;
    this.col_xl_3 = true;
    this.col_sm_3 = true;
    this.col_xl_6 = false;
    this.col_sm_6 = false;
    this.listView = false;
    this.col_xl_4 = false;
    this.col_sm_4 = false;
    this.col_xl_2 = false;
    this.col_xl_12 = false;
  }

  grid6() {
    this.gridView = true;
    this.col_xl_2 = true;
    this.col_xl_6 = false;
    this.col_sm_6 = false;
    this.col_xl_3 = false;
    this.col_sm_3 = false;
    this.listView = false;
    this.col_xl_4 = false;
    this.col_sm_4 = false;
    this.col_xl_12 = false;
  }
}
