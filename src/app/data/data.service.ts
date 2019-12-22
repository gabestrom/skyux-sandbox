import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataModel } from './data.modal';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<DataModel> {
    return this.http.get<DataModel>('http://localhost:3000/posts');
  }
}
