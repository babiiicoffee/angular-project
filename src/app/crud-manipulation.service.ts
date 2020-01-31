import { Injectable } from '@angular/core';
import { DataModelList } from '../app/dataModelList'
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudManipulationService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<DataModelList[]>(this.apiUrl);
  }

  createData(data : DataModelList){
    return this.http.post<DataModelList>(this.apiUrl , data);
  }

  updataData(data : DataModelList){
    return this.http.put<DataModelList>(this.apiUrl , data);
  }

  deleteData(dataID : any){
    return this.http.delete<DataModelList[]>(this.apiUrl + "/" + dataID)
  }

  viewData(dataID : number): Observable<any> {
    return this.http.get<DataModelList[]>(this.apiUrl + "/" + dataID);
  }

}
